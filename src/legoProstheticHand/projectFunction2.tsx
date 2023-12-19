import { Container, Typography } from '@mui/material';
import CustomStyles from '../../components/CustomStyles.tsx';
import './projectFunction2.css'

export default function Project2() {
    return (
        <CustomStyles>
            <Container maxWidth={"md"} style={{backgroundColor: '#403e3b', justifyContent: "center", minHeight: '100vh'}}>
                <Container style={{justifyContent: "center", padding: "10px"}}>
                    <Typography variant={"h1"} align={'center'} fontWeight={"300"} gutterBottom>
                        LEGO EV3 Prosthetic Hand
                    </Typography>
                </Container>
                <Container style={{minHeight: '15vh',}}/>
                <Typography variant={"h2"} gutterBottom>
                    About this project
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    Blah blah blah
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    Did this this and this
                </Typography>
                <Typography align={"justify"} gutterBottom>
                    Resulted in this this and this
                </Typography>
                <Container style={{minHeight: '10vh',}}/>
                <Container style={{padding: "10px"}}>
                    <img src={"/images/robotic-arm.jpg"} alt={"Picture of robotic arm"} style={{ width: '100%', maxWidth: '75vh'}}/>
                </Container>
                <Typography align={'center'} gutterBottom>
                    This project did this and this blah blah blah blah balaldsfh qoewiofsdiaf wqe few aw  
                </Typography>
            </Container>
        </CustomStyles>
    )
}