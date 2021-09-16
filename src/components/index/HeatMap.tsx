import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { fetchGraphQL } from "@/services/fetchGraphQL";

// url to a valid topojson file
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const geoUrl = `/data/district_areas/lor_bezirksregionen.geojson`;

export default function HeatMap() {
  useEffect(() => {
    console.log("fetching GraphQL");
    fetchGraphQL(
      "/api/district",
      ` { district(name: "districtAreas") }`
    //   `
    //   query RepositoryNameQuery {
    //     # feel free to change owner/name here
    //     repository(owner: "facebook" name: "relay") {
    //       name
    //     }
    //   }
    // `
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
