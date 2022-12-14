const shopData = [
  {
    id: 1,
    name: "Orange leather couch with white Table",
    src: "https://images.unsplash.com/photo-1616593871468-2a9452218369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb3VjaHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    Price: 900,
  },
  {
    id: 2,
    name: "Orange cloth sofa with throw pillow",
    src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    Price: 600,
  },
  {
    id: 3,
    name: "Cyan sofa with two throw pillows",
    src: "https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    Price: 1000,
  },
  {
    id: 4,
    name: "Two Tone royal cloth armchair",
    src: "https://images.unsplash.com/photo-1507627593750-cab2a3684cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    Price: 600,
  },
  {
    id: 5,
    name: "Funky white leather couch with pillows",
    src: "https://images.unsplash.com/photo-1645527898423-a9654db8d29a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    Price: 450,
  },
  {
    id: 6,
    name: "Cyan modern sofa with throw pillows",
    src: "https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291Y2h8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    Price: 700,
  },
  {
    id: 7,
    name: "French Bespoke couch with throw pillows",
    src: "https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNvdWNofGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Price: 800,
  },
  {
    id: 8,
    name: "Two Seater sofa with glass table",
    src: "https://images.unsplash.com/photo-1644942803588-fbae66bb0d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvdWNofGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Price: 1200,
  },
  {
    id: 9,
    name: "Pourquoi stylist sofa with alternating pillows",
    src: "https://images.unsplash.com/photo-1636737187598-7d1d6f45a440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGNvdWNofGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Price: 700,
  },
  {
    id: 10,
    name: "Three Orange leather armchairs",
    src: "https://images.unsplash.com/photo-1601335679963-10013d4578c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvdWNofGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Price: 1200,
  },
  {
    id: 11,
    name: "Gray suede couch with minimalistic table",
    src: "https://images.unsplash.com/photo-1595524362625-fcbe45feafa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGNvdWNofGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Price: 1500,
  },
  {
    id: 12,
    name: "Family home seven seater double couch",
    src: "https://images.unsplash.com/flagged/photo-1588262516915-e342186ecdf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGNvdWNofGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    Price: 2000,
  },
  {
    id: 13,
    name: "Brown aesthetic couches with gold table",
    src: "https://images.unsplash.com/photo-1623921017613-9970959b91b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxjb3VjaHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    Price: 2300,
  },
  {
    id: 14,
    name: "Orange couch with curving white table",
    src: "https://images.unsplash.com/photo-1616593871468-2a9452218369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxjb3VjaHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    Price: 900,
  },
  {
    id: 15,
    name: "Tyrell mixture leather couch with table",
    src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg3fHxjb3VjaHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    Price: 900,
  },
];

export default shopData;