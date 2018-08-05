ezQuery.fn.truncateText = function(maxLen, postfix){
    ezQuery(this).each(function(){
        var target = ezQuery(this);
        var content = this.innerHTML;
        var text = target.text();
        
        if (text.length > maxLen){
            text = text.slice(0,maxLen);
            text = text.replace(/&amp;/g, '&');
            
            var elemLen = 0;
            var buf = content;
            buf = buf.replace(/&amp;/g, '&');
            buf = buf.replace(/>\r\n</g, '');
            
            while (buf.indexOf(text) == -1 && i != -1 && j != -1) {
                var i = buf.indexOf('<');
                var j = buf.indexOf('>');
                elemLen += j - i + 1;
                
                buf = buf.slice(0,i) + buf.slice(j+1,buf.length);
            }
            
            content = content.slice(0, maxLen + elemLen);
            
            // Remove trailing word fragment
            content = content.replace(/[a-z0-9]+$/i, '');
            content = ezQuery.trim(content);
            
            content = content + postfix;
            
            this.innerHTML = content;
        }
    });
};