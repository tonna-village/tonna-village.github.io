const businesses = {
  "food-drink": [
    {
      title: "The Riverside",
      description: "",
      phone: "01639 639111",
      email: "",
      web: "http://www.the-riverside.com",
      facebook: "https://www.facebook.com/riverside.cafebar"
    },
    {
      title: "The Whittington Arms",
      description: "",
      phone: "01639 632577",
      email: "",
      web: null,
      facebook: "https://www.facebook.com/The-Whit-Tonna-215482855876213/"
    },
    {
      title: "Railway Tavern Thai Table",
      description: "",
      phone: "01639 632841",
      email: "",
      web: "http://therailwaythaitable.wales",
      facebook:
        "https://www.facebook.com/The-Railway-Thai-Table-RestaurantTakeaway-890668114424342/"
    },
    {
      title: "Tonna Chinese Takeaway",
      description: "",
      phone: "01639 644170",
      email: "",
      web: null,
      facebook: null
    }
  ],
  gifts: [],
  services: [
    {
      title: "Noddfa Boarding Kennels",
      description: "",
      phone: "01639 710944",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "Woofys Dog Creche",
      description: "",
      phone: "01639 020806",
      email: "",
      web: "https://www.woofysdogcreche.co.uk",
      facebook: "https://www.facebook.com/Woofys-Dog-Creche-261738397367751/"
    },
    {
      title: "Mucky Pups & Dirty Dogs",
      description: "",
      phone: "01639 639777",
      email: "",
      web: null,
      facebook:
        "https://www.facebook.com/pages/Mucky-Pups-Tonna/276751565804072"
    },
    {
      title: "Aberdulais Golf Range & Academy",
      description: "",
      phone: "01639 639111",
      email: "",
      web: null,
      facebook:
        "https://www.facebook.com/Aberdulais-Golf-Range-Academy-136718969710794/"
    },
    {
      title: "House of Glam Hair & Beauty Salon",
      description: "",
      phone: "01639 637999",
      email: "",
      web: "http://www.houseofglambeautysalon.co.uk",
      facebook: "https://www.facebook.com/House-Of-Glam-834890063303379/"
    },
    {
      title: "Tonna Luxury Coaches",
      description: "",
      phone: "01639 642727",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "Feet 1st Mobile Footcare Clinic",
      description: "",
      phone: "01639 766561",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "Calor Gas Centre Neath",
      description: "",
      phone: "01639 645252",
      email: "",
      web:
        "https://www.calor.co.uk/help-and-advice/calor-stockists-and-dealers/calor-centres/calor-stockists-south-west-and-wales/neath-calor-centre",
      facebook: null
    },
    {
      title: "Tonna Hospital",
      description: "",
      phone: "01639 862921",
      email: "",
      web: "http://www.wales.nhs.uk/sitesplus/863/page/39375",
      facebook: null
    }
  ],
  trades: [
    {
      title: "Japanese Knotweed Elimination",
      description: "",
      phone: "01639 869979",
      email: "",
      web: "http://www.knotweed-wales.com",
      facebook: "https://www.facebook.com/neathknotweed/"
    },
    {
      title: "Clockwork Carpentry",
      description: "",
      phone: "01639 992221",
      email: "",
      web: null,
      facebook: "https://www.facebook.com/Clockwork-Carpentry-878625572297755/"
    },
    {
      title: "Evans David & Sons",
      description: "",
      phone: "01639 643331",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "A J Motors",
      description: "",
      phone: "01639 639917",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "N R Carpentry",
      description: "",
      phone: "01639 633522",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "S D Decorating",
      description: "",
      phone: "01639 766067",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "Trevor J Francis",
      description: "",
      phone: "01639 638820",
      email: "",
      web: "http://www.buildingsurveyingwales.com",
      facebook: null
    },
    {
      title: "Parr Carpets",
      description: "",
      phone: "01639 062612",
      email: "",
      web: null,
      facebook: "https://www.facebook.com/parrcarpets/"
    },
    {
      title: "Beynons Plumbing & Heating Engineers",
      description: "",
      phone: "01639 636217",
      email: "",
      web: null,
      facebook: "https://www.facebook.com/BeynonPlumbers"
    },
    {
      title: "A G Garden & Landscape",
      description: "",
      phone: "01639 769107",
      email: "",
      web: null,
      facebook: null
    },
    {
      title: "Julian Beynon Plumbing and Heating",
      description: "",
      phone: "01639 669627",
      email: "",
      web: null,
      facebook: "https://www.facebook.com/groups/225230210946177/"
    },
    {
      title: "Acacia Carpentry",
      description: "",
      phone: "01639 631571",
      email: "",
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
        "<li class='empty'>🙄 Looks like there aren't any businesses in this section.<a href='https://goo.gl/forms/LB5rMuWbcO2bJopg1'>Add a business</a></li>"
      );
    }

    businesses[listTitle].forEach(function(business) {
      let element = $("<li></li>");
      let text = $("<div class='business-text'></div>");
      text.append("<div class='business-title'>" + business.title + "</div>");
      text.append(
        "<div class='business-description text--meta'>" +
          business.description +
          "</div>"
      );
      let links = $("<div class='links'></div>");
      if (business.phone) {
        links.append(
          "<a href='tel:" + business.phone +"' target='_blank' class='btn btn--pill link--phone'><span>"+business.phone+"</span></a>"
        );
      }
      // if (business.web) {
      //   element.append("<a href='"+business.web+"' target='_blank' class='btn btn--pill link--web'><span>WWW</span></a>");
      // }
      // if (business.facebook) {
      //   element.append("<a href='"+business.facebook+"' target='_blank' class='btn btn--pill link--fb'><span>FB</span></a>");
      // }
      element.append(text);
      element.append(links);
      list.append(element);
    });
  });
})(businesses);
