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
  return tj.gpx(XML);
}
