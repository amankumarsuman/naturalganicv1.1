import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
    categories: {
        // backgroundColor: "green",
        height: "10%",
        display: "flex",
        // width: "60%",
        // margin: "auto",

    },
    categoriesDiv: {
        display: "flex",
        marginTop: "50px",
        marginRight: "50px",
        marginLeft: "50px"
        // '&:hover': {
        //     border: "1 px solid black",

        // },
    },
    categoriesSpan: {
        '&:hover': {
            border: "1px solid black",
            borderRadius: "10px",
            textAlign: "center",
            paddingTop: "10px",
            backgroundColor: "green",
            color: "white"
        },
    }


}));
