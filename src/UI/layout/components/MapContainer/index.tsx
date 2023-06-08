import { RefObject, useEffect, useRef, useState } from "react";
import mapboxgl, { MapLayerMouseEvent } from "mapbox-gl";
import { STYLES_ROUTES_ROAD_BY_TYPE } from "./styles/routes-road/routes-road-sub-styles";
import { MapPopup } from "./Popup";
import { IRoadFeature } from "./Popup/interfaces";
import { Legend } from "./Legend";

const onClose = (
  map: RefObject<mapboxgl.Map>,
  feature: IRoadFeature,
  setFeature: (feature: IRoadFeature | null) => void
) => {
  if (!map.current) {
    throw Error("map.current is not exist");
  }

  map.current.setFeatureState(
    {
      source: "autoTMF",
      id: feature.id,
    },
    {
      hover: false,
    }
  );
  setFeature(null);
};

const onMapClickListener = (
  map: RefObject<mapboxgl.Map>,
  feature: IRoadFeature,
  setFeature: (feature: IRoadFeature | null) => void
) => {
  if (!map.current) {
    throw Error("map.current is not exist");
  }

  setFeature(feature);

  map.current.setFeatureState(
    {
      source: "autoTMF",
      id: feature.id,
    },
    {
      hover: true,
    }
  );
};

export const MapContainer = () => {
  //Init params for map
  mapboxgl.accessToken =
    "pk.eyJ1IjoidHNrbm9mZiIsImEiOiJjbGNxZDlxMnowNHV4M3JwZHp0ZTlvM2NiIn0.Tz-_y_F7EwR2NkPNA-Xlkw";

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>(null);

  const lng = 37.618423;
  const lat = 55.751244;
  const zoom = 5;

  //Popup states
  const [feature, setFeature] = useState<IRoadFeature | null>(null);

  //Map init
  useEffect(() => {
    if (map.current || !mapContainerRef.current) return; // initialize map only once

    // @ts-ignore
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/tsknoff/cleoptu9e002101o89vytlhxh",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  //Load geojson to map
  useEffect(() => {
    if (!map.current) return;

    map.current.on("load", () => {
      // @ts-ignore
      map.current.addSource("autoTMF", {
        type: "geojson",
        data: "/data/all-roads.geojson",
        generateId: true,
      });
      // @ts-ignore
      map.current.addLayer({
        id: "autoTMF-layer",
        source: "autoTMF",
        type: "line",
        ...STYLES_ROUTES_ROAD_BY_TYPE,
      });
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;
    const listener = (e: MapLayerMouseEvent) =>
      onMapClickListener(map, (e.features as IRoadFeature[])[0], setFeature);

    map.current.on("click", "autoTMF-layer", listener);

    return () => {
      if (!map.current) return;

      map.current.off("click", "autoTMF-layer", listener);
    };
  }, []);

  return (
    <>
      <div
        ref={mapContainerRef}
        style={{ height: "100vh", width: "100vw" }}
      ></div>

      <Legend />

      {feature && (
        <MapPopup
          open={!!feature}
          feature={feature}
          onClose={() => onClose(map, feature, setFeature)}
        />
      )}
    </>
  );
};
