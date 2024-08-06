$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // Sidebar
  $(".menu-btn").on("click", function (e) {
    $("body").toggleClass("toggle-menu");
  });
  $(".sidebar-overlay").on("click", function (e) {
    $("body").removeClass("toggle-menu");
  });

  // Search
  $(".search-btn").on("click", function (e) {
    $("body").toggleClass("open-search");
  });
  $(".search-overlay").on("click", function (e) {
    $("body").removeClass("open-search");
  });

  // Hiring Chart
  let bookingChartCanvas = document.getElementById("bookingChart");
  if (bookingChartCanvas) {
    var ctx = bookingChartCanvas.getContext("2d");
    var data = {
      labels: [
        "Jan",
        "Febr",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [65, 38, 58, 42, 45, 72, 55, 50, 48, 65, 35, 55],
          backgroundColor: "#3563E9",
          borderRadius: 6,
          barThickness: 20,
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#262626",
            font: {
              size: 12,
              lineHeight: "20px",
            },
            padding: 8,
          },
          grid: {
            drawTicks: false,
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: "#262626",
            callback: function (value) {
              if (value === 0) {
                return value;
              } else {
                return value + "K";
              }
            },
            font: {
              size: 12,
              lineHeight: "20px",
              family: "'Urbanist', sans-serif",
            },
            padding: 8,
            stepSize: 20,
          },
          grid: {
            drawTicks: false,
            color: "#DEE0E3",
          },
          border: {
            display: false,
            dash: [4],
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var bookingChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }

  // Resolved Complaint Chart
  let carRentalChartCanvas = document.getElementById("carRentalChart");
  if (carRentalChartCanvas) {
    var ctx = carRentalChartCanvas.getContext("2d");
    var data = {
      labels: ["Sport Car", "SUV", "Coupe", "Hatchback", "Sedan"],
      datasets: [
        {
          backgroundColor: [
            "#123089",
            "#1E4CD2",
            "#3563E9",
            "#7A9BF9",
            "#BACCFF",
          ],
          data: [439, 265, 488, 316, 312],
          borderAlign: "inner",
          borderColor: "#fff",
          borderWidth: 1,
          borderRadius: 5,
        },
      ],
    };
    var options = {
      cutout: 65,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var carRentalChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }

  // Select2
  $(".year-select").select2({
    width: "74px",
    dropdownCssClass: "select-menu",
    selectionCssClass: "year-select-menu",
  });
  $(".year-select1").select2({
    width: "auto",
    dropdownCssClass: "select-menu",
    selectionCssClass: "year-select-menu",
  });
  $(".custom-select").select2({
    width: "100%",
    dropdownCssClass: "select-menu",
    selectionCssClass: "custom-select-menu",
  });

  // CountUp
  $(".value .count-up").counterUp({
    delay: 10,
    time: 1000,
  });

  // Datatable
  $("#datatable1").DataTable({
    sort: true,
    filter: false,
    info: false,
    autoWidth: false,
    pagingType: "full_numbers",
    order: [[0, ""]],
    pageLength: 6,
    layout: {
      topStart: null,
      top: null,
      topEnd: null,
      bottomStart: "pageLength",
    },
    language: {
      info: "Showing _START_-_END_ of _TOTAL_ Results",
      paginate: {
        first: '<img src="images/first-active-icon.svg" alt="First"/>',
        last: '<img src="images/last-active-icon.svg" alt="Last"/>',
        previous: '<img src="images/prev-active-icon.svg" alt="Prev"/>',
        next: '<img src="images/next-active-icon.svg" alt="Next"/>',
      },
      lengthMenu: "_MENU_ Records per page",
    },
    lengthMenu: [6, 10, 15],
  });

  // Password Toggle
  $(".password-btn").click(function () {
    var passwordInput = $(this).siblings(".password-input");
    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).addClass("show-password");
    } else {
      passwordInput.attr("type", "password");
      $(this).removeClass("show-password");
    }
  });

  // Circular Progress
  $(".circle")
    .circleProgress({
      value: 0.55,
      size: 78,
      fill: "#FFFFFF",
      startAngle: 29.9,
      thickness: 4,
      lineCap: "round",
      emptyFill: "#CECECE",
      animation: { duration: 2000, easing: "circleProgressEasing" },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("span")
        .html(Math.round(55 * progress) + "<i>%</i>");
    });

  // AOS Initialize
  AOS.init({
    once: true,
    duration: 600,
    disable: "mobile",
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  setTimeout(function () {
    $("body").addClass("page-loaded");
  }, 10);
});
