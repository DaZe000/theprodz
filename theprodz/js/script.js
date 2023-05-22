$(document).ready(function() {
    $(".portfolio-categories a").on("click", function(e) {
      e.preventDefault();
      const selectedCategory = $(this).data("category");
  
      $(".portfolio-categories a").removeClass("active");
      $(this).addClass("active");
  
      if (selectedCategory === "all") {
        $(".portfolio-grid .item").show();
      } else {
        $(".portfolio-grid .item").hide();
        $(".portfolio-grid .item." + selectedCategory).show();
      }
    });
        // Lightbox initialization
        lightbox.option({
            albumLabel: "Image %1 of %2",
            fadeDuration: 300,
            resizeDuration: 300,
            wrapAround: true
          });
  });

