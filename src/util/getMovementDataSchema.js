import {
  mem
} from 'util';

import {
  movementDataSchemaURI
} from 'config';



function getMovementDataSchemaFn(){
  return fetch( movementDataSchemaURI )
}

export const getMovementDataSchema = mem( getMovementDataSchemaFn )
