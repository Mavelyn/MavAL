import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme ({
    palette: {
        primary: { 500: '#2B3F81' },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                color: "primary",
            }
        },
        MuiTextField: {
            root: {
                marginTop: 2,
                marginBottom: 20,
            },
        },
        MuiDialog: {
            paper: {
                display: "flex",
                minHeight: 300,
                minWidth: 500,
                justifyContent: "center",
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
            }
        },
        MuiTab: {
            root: {
                textTransform: "none",
            }
        },
    },
    props: {
        MuiTextField: {
            variant: "outlined",
            size: "small",
            InputLabelProps: {
                shrink: true,
            },
            
        },
        MuiDialogTitle: {
            disableTypography: true,
        },
        MuiTab: {
            disableRipple: true,
        },
    }
})

export default theme