export function secToMil( sec ) {
  return sec * 1000
}


export function minToSec( min ) {
  return min * 60
}

export function minToMil( min ) {
  return secToMil( minToSec( min))
}


export function hrToMil( hr ) {
  return minToMil( hr * 60 )
}
