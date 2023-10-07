let isClicked = false;
      document
        .querySelector(".second-header p")
        .addEventListener("click", () => {
          if (isClicked) {
            document.querySelector(
              ".second-header p"
            ).innerHTML = `<i class="fa-solid fa-bars"></i>`;
            setTimeout(() => {
              document
                .querySelector(".second-header p i")
                .classList.remove("rotation");
            }, 200);
            isClicked = false;
          } else {
            setTimeout(() => {
              document
                .querySelector(".second-header p i")
                .classList.remove("rotation");
              document.querySelector(
                ".second-header p"
              ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            }, 200);
            isClicked = true;
          }

          document
            .querySelector(".second-header-dd")
            .classList.toggle("display-toggle");
          document
            .querySelector(".second-header p i")
            .classList.add("rotation");
        });

      document
        .querySelector(".last-header p")
        .addEventListener("click", function () {
          document.querySelector(".last-header-dd").classList.toggle("lhd-dis");
        });

      document
        .querySelector(".main .announcement i")
        .addEventListener("click", function () {
          document.querySelector(".main .announcement").style.display = "none";
        });
      document
        .querySelector(".top-header p a:nth-child(1)")
        .addEventListener("click", function () {
          document.html.style.fontSize = "10px !important";
        });
      document.getElementById("dark").addEventListener("change", function () {
        if (this.checked) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      });
      AOS.init();
