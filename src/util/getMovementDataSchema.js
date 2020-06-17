import {
  movementDataSchemaURI
} from 'config'

function getMovementDataSchema(){
  return fetch( movementDataSchemaURI )
}
