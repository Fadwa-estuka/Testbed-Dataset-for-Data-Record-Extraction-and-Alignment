!function($) {
    function Search(options) {
        this.$el = $(options.resultsContainer);
        this.container = this.$el.parent();
        this.query = this.$el.data('query');
        this.suggestion = this.$el.data('spelling-suggestions');
        this.threshold = 10;
        this.oldResults = "";
        this.pageSize = 50;
        this.offset = 0;
        this.heightOffset = 2000;
        this.minColumnCount = 3;
        this.columnWidth = 306;
        this.gutterWidth = 13;
        this.pageIndex = 1;
        this.renderedUrls = {};
        this.pinHeader = true;
        this.layout();
        this.container.css('visibility','visible');
        this.setUpAlternateQueries();
        this.setPaginationStatus(this.$el.children());
        this.processNewIbleUrls(this.$el.children());
        this.bindEvents();
    }

    Search.prototype = {
        constructor: Search,
                
        setUpAlternateQueries:function(){
            var suggestion = this.$el.data('spelling-suggestion'),
                filteredCount = this.$el.data('filtered-count'),
                contentLoadedPromise;
            if (typeof suggestion !== 'undefined' && suggestion !== ""){
                this.suggestion = suggestion;
                this.query = this.suggestion;
                if (filteredCount > 0 && filteredCount < this.threshold) {
                    //set opacity to 0 so we can fade them in if you want to see the original query
                    this.oldResults = this.$el.children().css({opacity:0}).detach();
                    this.bindAlternateQuery();
                }
                contentLoadedPromise = this.loadContent(true);
            } else {
                contentLoadedPromise = $.Deferred();
                contentLoadedPromise.resolve();
            }
            return contentLoadedPromise;
        },
        
        bindEvents: function() {
            var self = this;
            $(window).scroll(function(e){
                if (self.$el.attr('infinitePagination') == 'enabled')
                    self.loadContent();
                self.pinOrUnpinHeader();
                self.showOrHideScrollToTopBtn();               
            });
            
            $('.scroll-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            }); 
                        
            $(window).on("debouncedresize", $.proxy(this.layout, this));            
            
            $('.search-type-select').on("click", $.proxy(this.changeSearchType, this));
            $('#searchbar-submitbtn').on("click", $.proxy(this.searchClicked, this));
            $('#searchbar-form').on("submit", $.proxy(this.searchSubmit, this));
        },

        pinOrUnpinHeader: function() {
            var $header = $('#search-header'),
                headerOffsetTop = $header.parent().offset().top,
                scrollTop = $(window).scrollTop();
                
            if (scrollTop > headerOffsetTop) {
                if (this.pinHeader) {
                    $header.parent().height($header.outerHeight());
                    $header.css({'top':0, 'position':'fixed'});
                    this.pinHeader = false;
                }
            } else {
                $header.css({'position':'relative'});
                this.pinHeader = true;
            }            
        },
        
        showOrHideScrollToTopBtn: function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 200) {
                $('.scroll-to-top').animate({'bottom':'-10px'}, 350);
            } else {
                $('.scroll-to-top').animate({'bottom':'-100px'}, 350);
            }             
        },
        
        changeSearchType: function(e) {
            var $link = $(e.currentTarget);
            e.preventDefault();
            $('.search-type-select').parent().removeClass('active');
            $link.parent().addClass('active');
            $('#search-sort-name').html($link.data('typename'));
            $('#search-type-icon').attr('class', 'bg-icon ' + $link.data('icon-class'));
            $('#searchbar-form').attr('action', $link.data('search-action'));
            $('#searchbar-form').submit();
        },
        
        searchClicked: function(e) {
            e.preventDefault();
            $('#searchbar-form').submit();
        },
        
        searchSubmit: function(e) {
            if ($('#searchbar-form').hasClass('howto')) {
                e.preventDefault();
                var searchForm = $('#searchbar-form'),
                    action = searchForm.attr('action'),
                    input = encodeURIComponent(searchForm.find('input').val().trim().replace(/\s+/g, " ")).replace(/%20/g,'+');
                window.location = action + input + '/';    
            }           
        },
        
        bindAlternateQuery:function(){
            var that = this;
            $('.original-search-link').one('click', function(e){
                e.preventDefault();
                that.$el.children().detach();
                that.$el.append(that.oldResults);
                that.afterLoad(that.oldResults);
                $('.suggestions').hide();
                that.query = that.$el.data('query');
                that.offset = 0;
            });
        },

        loadContent: function(newQuery) {
            var target = window,
                self = this,
                searchAction = this.$el.data('search-action'),
                mayLoadContent = $(target).scrollTop() + this.heightOffset >= $(document).height() - $(target).height();
            if (mayLoadContent && !this.loading){
                this.loading = true;
                this.beforeLoad();

                // Solr search uses offset, while Stremor search uses pageIndex.
                // Both paramaters are passed to each servlet, but only one gets used
                if (newQuery !== true) {
                    this.offset = this.offset + this.pageSize;
                    this.pageIndex += 1;
                }
                return $.ajax({
                    url: searchAction,
                    data: {sort: 'none', partial: 'true', q: this.query, offset: this.offset, count: this.pageSize, page: this.pageIndex},
                    dataType: 'html',
                    success: function(data){
                        var data = $(data);
                        self.processNewIbleUrls(data);
                        if (newQuery === true){
                            data.css({opacity:1}); // if we're just overwriting the page we don't want an animation
                        }
                        self.$el.append(data);
                        self.afterLoad(data);
                        self.loading = false;
                    }
                });
            }
        },

        beforeLoad: function() {
            this.$el.find('#loading').fadeIn();
        },

        afterLoad: function($elementsLoaded) {
            this.$el.find($('#loading')).fadeOut();
            $elementsLoaded.fadeInWithDelay();
            this.setPaginationStatus($elementsLoaded);
        },

        setPaginationStatus: function($elements) {
            this.$el.attr('infinitePagination', 'enabled');
            if (!$elements.length || $elements.eq($elements.length-1).data('unfiltered-count') < this.pageSize)
                this.$el.attr('infinitePagination', 'disabled');
        },

        processNewIbleUrls: function($elements) {
            var self = this;
            $elements.find("a.cover-image").each(function(i, el){
                var $el = $(el),
                    url = $el.attr('href');
                if (self.renderedUrls[url]) {
                    $el.closest('li').css("display", "none");
                } else {
                    self.renderedUrls[url] = true;
                }
            });
        },

        layout: function() {
            var winWidth = $(window).width(),
                container = this.container,
                containerWidth = container.width(),
                minColumnCount = this.minColumnCount;

            var colCountBefore = this.columnCount(containerWidth),
                colCountAfter = this.columnCount(winWidth);

            if (colCountAfter < this.minColumnCount)
                colCountAfter = this.minColumnCount;
            var width = this.getRowWidth(colCountAfter)
            container.width(width);
            $('.container.content-match').width(width - 26);
        },

        columnCount: function(containerWidth) {
            var itemWidth = this.columnWidth + (this.gutterWidth * 2),
                cols = Math.floor(containerWidth / itemWidth)
            return cols;
        },

        getRowWidth: function(columnCount) {
            return (this.columnWidth + (this.gutterWidth * 2)) * columnCount;
        }
    }

    $.fn.fadeInWithDelay = function(){
        var delay = 0;
        return this.each(function(){
            $(this).delay(delay).animate({opacity:1}, 200);
            delay += 100;
        });
    };
    
    window.IbleSearch = Search;
}(jQuery);
