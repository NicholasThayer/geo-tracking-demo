<script>
  import {
    secToMil,
    minToSec,
  } from 'config'
  
  import {
    getClock,
  } from './clock';

  getClock(
    'appClock',
    secToMil(2),
    minToSec(10),
    1588550400,
    0,
    0
  )
</script>
