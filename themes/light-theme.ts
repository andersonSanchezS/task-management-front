import { createTheme} from '@mui/material'
import { blue, grey, red } from '@mui/material/colors'

export const lightTheme = createTheme({
    palette:{
      mode:'light',
      background: {
        default: grey[300]
      },
      primary:{
        main: blue[500]
      },
      secondary:{
        main: '#19857b'
      },
      error:{
        main: red.A400
      },
    },
    components: {
        
    }
})
