import POGOProtos from "pokemongo-protobuf";

import s2 from "s2-geometry";

import print from "../../../print";

const S2Geo = s2.S2;

/**
 * @param {Object} msg
 * @return {Buffer}
 */
export default function GetMapObjects(msg) {

  let latitude = msg.latitude;
  let longitude = msg.longitude;

  let mapCells = [];

  let buffer = {
    status: "SUCCESS",
    map_cells: mapCells
  };

  let limit = msg.cell_id.length;

  // TODO: oop, forts are world objects!

  return new Promise((resolve) => {
    this.getFortsByCells(msg.cell_id, [], 0).then((cells) => {
      cells.map((cell) => {
        if (cell.forts.length) {
          console.log("###" + cell.cellId + "###");
          cell.forts.map((fort) => {
            console.log(fort.uid, fort.latitude, fort.longitude);
          });
        }
        mapCells.push({
          s2_cell_id: cell.cellId,
          current_timestamp_ms: +new Date(),
          forts: cell.forts.map((fort) => { return fort.serialize() }),
          spawn_points: [],
          deleted_objects: [],
          fort_summaries: [],
          decimated_spawn_points: [],
          wild_pokemons: [],
          catchable_pokemons: [],
          nearby_pokemons: []
        });
      });
      resolve(
        POGOProtos.serialize(buffer, "POGOProtos.Networking.Responses.GetMapObjectsResponse")
      );
    });
  });

}