import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import { CardContent } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Resources = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const [c,setC] = useState({
      one:false,
      two:false,
      three:false
  })
  
  return (
    <div className={classes.root}>
  
{!c.one?<Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-label="Expand"
      aria-controls="additional-actions1-content"
      id="additional-actions1-header"
    >
      <FormControlLabel
        aria-label="Acknowledge"
        onClick={()=>{setC({...c,one:true})}}
        onFocus={(event) => event.stopPropagation()}
        control={<Checkbox />}
        label="College Guide For Low Income Students"
      />
    </AccordionSummary>
    <AccordionDetails>
      <Typography color="textSecondary">
      Besides money, the largest hurdle that low-income college students face is an overall lack of resources.  Low-income students are unlikely to have personal or professional mentors to guide them through the challenges of higher education.  They are also less likely to have family support for choosing the right college, completing financial aid forms, or even regular visits once they get to school.
      <br/>
      <Link href="https://www.accreditedschoolsonline.org/resources/low-income-students/" onClick={preventDefault}>
        Source
     </Link>
      </Typography>
    </AccordionDetails>
  </Accordion> :<></>}

  
{!c.two? <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={()=>{setC({...c,two:true})}}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="Five Rules to Improve Your Financial Health"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
          The term “personal finance” refers to how you manage your money and plan for your future. All of your financial decisions and activities have an effect on your financial health. We are often guided by specific rules of thumb, such as “don’t buy a house that costs more than two-and-a-half years’ worth of income” or “you should always save at least 10% of your income toward retirement.”
          <br/>
          <Link href="https://www.investopedia.com/articles/personal-finance/111813/five-rules-improve-your-financial-health.asp" onClick={preventDefault}>
            Source
         </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
 :<></>}

  
{!c.three?   
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={()=>{setC({...c,three:true})}}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="8 Tips for Taking Out Student Loans"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
          Many students find that they need to borrow money to cover college costs. Luckily, student loans often provide good deals, and financial aid officers can help with this process. Check out these tips to learn how to make taking out a loan go smoothly.
          <br/>
          <Link href="https://bigfuture.collegeboard.org/pay-for-college/loans/8-tips-for-taking-out-student-loanss" onClick={preventDefault}>
            Source
         </Link>
          </Typography>
        </AccordionDetails>
      </Accordion> :<></>}
     
  
    </div>
  );
}

export default Resources;   