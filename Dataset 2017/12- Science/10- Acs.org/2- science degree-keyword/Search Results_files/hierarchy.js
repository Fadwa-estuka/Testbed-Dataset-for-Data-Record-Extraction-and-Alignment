function Hierarchy() {

		this.chn;
		this.ss1;
		this.ss2;
		this.ss3;
		this.typ;
		this.ttl;
		this.id;

		this.getSiteSection = function() {
			return this.chn;
		};

		this.getSubSection = function() {
			var _hs = this.chn;
			if (this.ss1) {
				_hs += ':' + this.ss1;
			}
			return _hs;
		};

		this.getSubSection2 = function() {
			var _hs = this.chn;
			if (this.ss1) {
				_hs += ':' + this.ss1;
				if (this.ss2) {
					_hs += ':' + this.ss2;
				}
			}
			return _hs;
		};

		this.getSubSection3 = function() {
			var _hs = this.chn;
			if (this.ss1) {
				_hs += ':' + this.ss1;
				if (this.ss2) {
					_hs += ':' + this.ss2;
					if (this.ss3) {
						_hs += ':' + this.ss3;
					}
				}
			}
			return _hs;
		};

		this.getPageName = function() {
			var _hs = this.chn; 
			// if (this.ss1) {
			//	_hs += ':' + this.ss1;
			//	if (this.ss2) {
			//		_hs += ':' + this.ss2;
			//		if (this.ss3) {
			//			_hs += ':' + this.ss3;
			//		}
			//	}
			// }

			return _hs;
		};

		this.getContentType = function() {
			return this.typ;
		};

		this.getContentTitle = function() {
			return this.ttl;
		};

		this.getContentId = function() {
			return this.id;
		};
		
		this.setSection = function(i, val) {
			switch(i) {
				case 0:
					this.chn = val;
					break;
				case 1:
					this.ss1 = val;
					break;
				case 2:
					this.ss2 = val;
					break;
				case 3:
					this.ss3 = val;
					break;
			}
		};
	}