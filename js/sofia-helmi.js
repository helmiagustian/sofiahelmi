        // Closes the sidebar menu
        $("#menu-close").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });
        // Opens the sidebar menu
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });
        // Scrolls to the selected menu item on the page
        $(function() {
            $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        //#to-top button appears after scrolling
        var fixed = false;
        $(document).scroll(function() {
            if ($(this).scrollTop() > 250) {
                if (!fixed) {
                    fixed = true;
                    // $('#to-top').css({position:'fixed', display:'block'});
                    $('#to-top').show("slow", function() {
                        $('#to-top').css({
                            position: 'fixed',
                            display: 'block'
                        });
                    });
                }
            } else {
                if (fixed) {
                    fixed = false;
                    $('#to-top').hide("slow", function() {
                        $('#to-top').css({
                            display: 'none'
                        });
                    });
                }
            }
        });


        function initMap() {
            var sh = {lat: -6.330353, lng: 106.947512};

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: sh,
                scrollwheel: false
            });

            var latlng = new google.maps.LatLng(-6.330353, 106.947512);

            var marker = new google.maps.Marker({
                position: latlng, 
                map: map, 
                html: 'PLANE'
            });

            var contentString = "<a href=\"https://goo.gl/maps/7ZceFxV9KhG2\" target='_blank'>Click for directions</a>";

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });

            infowindow.open(map, marker);
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
        }


        $(document).ready(function() {
            initMap();
            $('#the-weeding-of').textillate({
                in: {
                    effect: 'bounceInLeft',    
                    sync: false,
                    delay: 200,
                  },
            });
            $('#sofia').textillate({
                in: {
                    effect: 'fadeInLeft',    
                    sync: true,
                    delay: 4000,
                  },
            });
            $('#helmi').textillate({
                in: {
                    effect: 'fadeInRight',   
                    sync: true,
                    delay: 4000,
                  },
            });
            $('#and').textillate({
                in: {
                    effect: 'fadeInUp',    
                    sync: true,
                    delay: 4000,
                  },
            });
            $("#find-out-more").hide().delay(5000).show(1000);
        });
