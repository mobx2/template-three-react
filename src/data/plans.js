const plans = [
  {
    title: "Basic",
    price: "$15",
    time: "Per Month",
    image: "imgs/hosting-basic.png",
    features: [
      "10GB HDD Space",
      "5 Email Addresses",
      "2 Subdomains",
      "4 Databases",
      "Basic Support",
    ],
    popular: false,
  },
  {
    title: "Advanced",
    price: "$25",
    time: "Per Month",
    image: "imgs/hosting-advanced.png",
    features: [
      "20GB HDD Space",
      "10 Email Addresses",
      "5 Subdomains",
      "8 Databases",
      "Advanced Support",
    ],
    popular: true,
    label: "Most Popular",
  },
  {
    title: "Professional",
    price: "$45",
    time: "Per Month",
    image: "imgs/hosting-professional.png",
    features: [
      "50GB HDD Space",
      "20 Email Addresses",
      "10 Subdomains",
      "20 Databases",
      "Professional Support",
    ],
    popular: false,
  },
];

export default plans;
