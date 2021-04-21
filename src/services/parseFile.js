const tj = require("@mapbox/togeojson");
const DOMParser = require("xmldom").DOMParser;

export const parseGPXFiles = async (files) => {
  let geoFiles = [];
  for (let x = 0; x < files.length; x++) {
    geoFiles.push(await convertToXML(files[x]));
  }
  return geoFiles;
};

async function convertToXML(file) {
  let TXT = await file.text();
  const XML = new DOMParser().parseFromString(TXT, "utf8");
  return await convertToGeo(XML);
}

async function convertToGeo(XML) {
  let data = await tj.gpx(XML);
  let heights = [];
  data.features[0].geometry.coordinates.forEach((arr) => {
    let h = [];
    arr.forEach((alt) => {
      h.push(alt[2]);
    });
    heights.push(h);
  });
  data.features[0].properties.heights = heights;
  console.log(data);
  return data;
}
