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
  let profitEarnedChartCanvas = document.getElementById("profitEarnedChart");
  if (profitEarnedChartCanvas) {
    var ctx = profitEarnedChartCanvas.getContext("2d");
    var data = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          data: [12, 5, 7, 5, 17, 10, 10, 30],
          backgroundColor: "#9E333D",
          borderWidth: 1,
          borderColor: "transparent",
          barThickness: 7,
        },
        {
          data: [10, 3, 4, 2, 12, 6, 7],
          backgroundColor: "#E67B86",
          borderWidth: 1,
          borderColor: "transparent",
          barThickness: 7,
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
            color: "#606060",
            font: {
              size: 12,
              lineHeight: "14px",
            },
            padding: 3,
          },
          grid: {
            drawTicks: false,
            display: false,
          },
          border: {
            color: "#BEBEBE",
          },
        },
        y: {
          ticks: {
            color: "#606060",
            font: {
              size: 12,
              lineHeight: "14px",
            },
            padding: 3,
            stepSize: 10,
          },
          grid: {
            drawTicks: false,
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var profitEarnedChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }

  // Resolved Complaint Chart
  let resolvedComplaintChartCanvas = document.getElementById(
    "resolvedComplaintChart"
  );
  if (resolvedComplaintChartCanvas) {
    var ctx = resolvedComplaintChartCanvas.getContext("2d");
    var data = {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          data: [0, 27, 20, 34, 0],
          fill: true,
          borderColor: "#9E333D",
          borderWidth: 1,
          pointBorderWidth: 0,
          pointStyle: "line",
          tension: 0.4,
          label: "Unlimited Pizza",
          backgroundColor: "#FF55551B",
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      layout: {
        padding: -50,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var resolvedComplaintChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  }

  // Select2
  $(".custom-select").select2({
    width: "100%",
    dropdownCssClass: "custom-select-menu",
    laceholder: "This is my placeholder",
  });

  // CountUp
  $(".numbers .count-up").counterUp({
    delay: 10,
    time: 1000,
  });

  // Datatable
  $("#datatable1").DataTable({
    sort: false,
    filter: false,
    info: true,
    autoWidth: false,
    pagingType: "full_numbers",
    order: [[0, ""]],
    pageLength: 5,
    layout: {
      topStart: null,
      top: null,
      topEnd: null,
      bottomStart: "info",
    },
    language: {
      info: "Showing _START_-_END_ of _TOTAL_ Results",
      paginate: {
        first: false,
        last: false,
        previous:
          '<img src="images/prev-active-icon.svg" class="active-icon" alt="Prev"/><img src="images/prev-disabled-icon.svg" class="default-icon" alt="Prev"/>',
        next: '<img src="images/next-active-icon.svg" class="active-icon" alt="Next"/><img src="images/next-disabled-icon.svg" class="default-icon" alt="Next"/>',
      },
    },
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
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
