const businesses = {
  "food-drink": [
    {
      title: "The Riverside",
      phone: "01639 639111",
      web: "http://www.the-riverside.com",
      facebook: "https://www.facebook.com/riverside.cafebar"
    },
    {
      title: "The Whittington Arms",
      phone: "01639 632577",
      web: null,
      facebook: "https://www.facebook.com/The-Whit-Tonna-215482855876213/"
    },
    {
      title: "Railway Tavern Thai Table",
      phone: "01639 632841",
      web: "http://therailwaythaitable.wales",
      facebook:
        "https://www.facebook.com/The-Railway-Thai-Table-RestaurantTakeaway-890668114424342/"
    },
    {
      title: "Tonna Chinese Takeaway",
      phone: "01639 644170",
      web: null,
      facebook: null
    }
  ],
  gifts: [],
  services: [
    {
      title: "Noddfa Boarding Kennels",
      phone: "01639 710944",
      web: null,
      facebook: null
    },
    {
      title: "Woofys Dog Creche",
      phone: "01639 020806",
      web: "https://www.woofysdogcreche.co.uk",
      facebook: "https://www.facebook.com/Woofys-Dog-Creche-261738397367751/"
    },
    {
      title: "Mucky Pups & Dirty Dogs",
      phone: "01639 639777",
      web: null,
      facebook:
        "https://www.facebook.com/pages/Mucky-Pups-Tonna/276751565804072"
    },
    {
      title: "Aberdulais Golf Range & Academy",
      phone: "01639 639111",
      web: null,
      facebook:
        "https://www.facebook.com/Aberdulais-Golf-Range-Academy-136718969710794/"
    },
    {
      title: "House of Glam Hair & Beauty Salon",
      phone: "01639 637999",
      web: "http://www.houseofglambeautysalon.co.uk",
      facebook: "https://www.facebook.com/House-Of-Glam-834890063303379/"
    },
    {
      title: "Tonna Luxury Coaches",
      phone: "01639 642727",
      web: null,
      facebook: null
    },
    {
      title: "Feet 1st Mobile Footcare Clinic",
      phone: "01639 766561",
      web: null,
      facebook: null
    },
    {
      title: "Calor Gas Centre Neath",
      phone: "01639 645252",
      web:
        "https://www.calor.co.uk/help-and-advice/calor-stockists-and-dealers/calor-centres/calor-stockists-south-west-and-wales/neath-calor-centre",
      facebook: null
    },
    {
      title: "Tonna Hospital",
      phone: "01639 862921",
      web: "http://www.wales.nhs.uk/sitesplus/863/page/39375",
      facebook: null
    }
  ],
  trades: [
    {
      title: "Japanese Knotweed Elimination",
      phone: "01639 869979",
      web: "http://www.knotweed-wales.com",
      facebook: "https://www.facebook.com/neathknotweed/"
    },
    {
      title: "Clockwork Carpentry",
      phone: "01639 992221",
      web: null,
      facebook: "https://www.facebook.com/Clockwork-Carpentry-878625572297755/"
    },
    {
      title: "Evans David & Sons",
      phone: "01639 643331",
      web: null,
      facebook: null
    },
    {
      title: "A J Motors",
      phone: "01639 639917",
      web: null,
      facebook: null
    },
    {
      title: "N R Carpentry",
      phone: "01639 633522",
      web: null,
      facebook: null
    },
    {
      title: "S D Decorating",
      phone: "01639 766067",
      web: null,
      facebook: null
    },
    {
      title: "Trevor J Francis",
      phone: "01639 638820",
      web: "http://www.buildingsurveyingwales.com",
      facebook: null
    },
    {
      title: "Parr Carpets",
      phone: "01639 062612",
      web: null,
      facebook: "https://www.facebook.com/parrcarpets/"
    },
    {
      title: "Beynons Plumbing & Heating Engineers",
      phone: "01639 636217",
      web: null,
      facebook: "https://www.facebook.com/BeynonPlumbers"
    },
    {
      title: "A G Garden & Landscape",
      phone: "01639 769107",
      web: null,
      facebook: null
    },
    {
      title: "Julian Beynon Plumbing and Heating",
      phone: "01639 669627",
      web: null,
      facebook: "https://www.facebook.com/groups/225230210946177/"
    },
    {
      title: "Acacia Carpentry",
      phone: "01639 631571",
      web: null,
      facebook: null
    }
  ]
};

// ===============================================================

(function(businesses) {
  Object.keys(businesses).forEach(function(listTitle) {
    const list = $("#" + listTitle + "-list");

    if (businesses[listTitle].length < 1) {
      return list.html(
        "<li class='empty'>🙄 Looks like there aren't any businesses in this section.</li>"
      );
    }

    businesses[listTitle].forEach(function(business) {
      let element = $("<li></li>");
      element.append("<div class='business-title'>" + business.title + "</div>");
      let links = $("<div class='links'></div>");
      if (business.web) {
        element.append("<a href='"+business.web+"' target='_blank' class='btn btn--pill'>Web</a>");
      }
      if (business.facebook) {
        element.append("<a href='"+business.facebook+"' target='_blank' class='btn btn--pill'>FB</a>");
      }
      if (business.phone) {
        element.append("<a href='tel:"+business.phone+"' target='_blank' class='btn btn--pill'>Phone</a>");
      }
      // element.append(links);
      list.append(element);
    });
  });
})(businesses);
