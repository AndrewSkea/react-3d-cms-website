
const lived_col = "red";
const lived_rad = "0.5";
const visited_col = "white";
const visited_rad = "0.3";

const livedInfo = {
  // China
  "Laixi": [0.04, 36.8881, 120.5178],
  "Shanghai": [0.04, 31.5, 120.5178],
  "Xuancheng": [0.04, 29.2, 118.7587],
  // Europe
  "Beauvais": [0.04, 49.4295, 2.0807],
  "Vevey": [0.2, 46.4628, 6.8419],
  // UK
  "London": [0.05, 51.5072, -0.1276],
  "York": [0.1, 53.9614, -1.0739],
  "Glasgow": [0.01, 55.8642, -4.2518],
  // Malaysia
  "Kuala Lumpur": [0.04, 3.1390, 101.6869]
}

const visitedInfo = {
  // Visited
  "St Petersburg": [0.05, 59.9311, 30.3609],
  "Tallinn": [0.05, 57.4370, 24.7536],
  // "Cardiff": [0.05, 51.4837, -3.1681],
  "Rome": [0.05, 41.9028, 12.4964],
  "Sydney": [0.05, -33.8688, 151.2093],
  "Brisbane": [0.05, -27.4705, 153.0260],
  "Pula": [0.05, 44.8666, 13.8496],
  "Cairo": [0.05, 30.0444, 31.2357],
  "Mt. Kilimanjaro": [0.05, -3.0674, 37.3556],
  "Reykjavik": [0.05, 64.1466, -21.9426],
  "Masai Mara": [0.05, 1.4433, 35.2081],
  "Rhodes": [0.05, 35.4341, 28.2176],
  "Corfu": [0.05, 39.6243, 19.9217],
  "Marmaris": [0.05, 37.8549, 28.2709],
  "Prague": [0.05, 50.0755, 14.4378],
  "Copenhagen": [0.05, 55.6761, 12.5683],
  "Helsinki": [0.05, 60.1699, 24.9384],
  "Riga": [0.05, 56.0, 24.1052],
  "Oslo": [0.05, 59.9139, 10.7522],
  // "Bruges": [0.05, 51.2092, 3.2248],
  "Lanzarote": [0.05, 29.0469, -13.5900],
  "Barcelona": [0.05, 41.390205, 2.154007]
}

function getMarketdata() {
  var data = [];
  for (var lkey in livedInfo) {
    data.push({
      lat: livedInfo[lkey][1],
      lng: livedInfo[lkey][2],
      size: livedInfo[lkey][0],
      color: lived_col,
      radius: lived_rad,
      label: lkey
    })
  }
  for (var vkey in visitedInfo) {
    data.push({
      lat: visitedInfo[vkey][1],
      lng: visitedInfo[vkey][2],
      size: visitedInfo[vkey][0],
      color: visited_col,
      radius: visited_rad,
      label: vkey
    })
  }
  console.log(data);
  return data;
}

export const markerData = eval(getMarketdata());


export const arcsData = [
  {
    startLat: 41.8781136,
    startLng: -87.6297982,
    endLat: 43.299428,
    endLng: -74.217933,
    color: " white"
  },
  {
    startLat: 19.263021,
    startLng: -87.450912,
    endLat: 28.6448,
    endLng: 77.216721,
    color: " white"
  },
  {
    startLat: 43.299428,
    startLng: -74.217933,
    endLat: 41.599998,
    endLng: -72.699997,
    color: " white"
  },
  {
    startLat: 41.8781136,
    startLng: -87.6297982,
    endLat: 35.007752,
    endLng: -97.092877,
    color: " white"
  },
  {
    startLat: 35.007752,
    startLng: -97.092877,

    endLat: 41.8781136,
    endLng: -87.6297982,
    color: " white"
  },
  {
    startLat: 35.007752,
    startLng: -97.092877,

    endLat: 32.715736,
    endLng: -117.161087,
    color: " white"
  }
];