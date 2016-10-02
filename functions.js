var LighteningStrike = function() {
	var lighteningStrikeModule = {
		cacheDom: function() {
			this.$container = $('.image-container');
			this.$loader = $('.loader');
		},
		framesArray: function() {
			this.$frame = [
				'core-still',
				'core-still-lightening',
				'eco-splash-lightening',
				'eco-splash',
				'eco-still',
				'eco-still-lightening',
				'plus-splash-lightening',
				'plus-splash',
				'plus-still',
				'plus-still-lightening',
				'prime-splash-lightening',
				'prime-splash',
				'prime-still',
				'prime-still-lightening',
				'core-splash-lightening',
				'core-splash'
			];

		},
		preLoadImages: function() {
			var i, c, currentframe;
			for(i = 0; i < this.$frame.length; i++) {
				currentframe = this.$frame[i];
				new Image().src= 'images/' + currentframe + '.jpg';
			}
		},
		removeLoader: function() {
			this.$loader.remove();
		},
		loopImages: function() {
			var i = 0;
			setImageModule.init(i, this.$frame);
		},
		init: function() {
			this.cacheDom();
			this.framesArray();
			this.preLoadImages();
			this.removeLoader();
			this.loopImages();
		}
	};
	var setImageModule = {
		init: function(i, frame) {
			var timeout;
			if (i < frame.length) {
                $('.image-container').html('<img src="images/' + frame[i] + '.jpg" alt="Image" />');
                if (frame[i].endsWith("-still") === true) {
                	timeout = 2000;
                } else {
                	timeout = 200;
                }
                i++;        
                if(i === frame.length) {
                	i=0;
                }
                setTimeout(function() {
					setImageModule.init(i, frame);
                },timeout);
            }
		}
	}
	return lighteningStrikeModule.init();
};