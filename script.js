// defining a function for tipCalculation

function tipCalculate()
{
    // local variables
    let bamt, tperc, np, tppamt, ttamt, fbamt;

    // data collection
    bamt = +ba.value;    // bill amount
    tperc = +tp.value;   // tip percentage
    np = +nop.value;    // no of persons

    //calc's
    tppamt = bamt * tperc/100;  // tip per person = bill amount * tip percentage
    ttamt = tppamt * np;        // total tip amount = tip per person * no of persons
    fbamt = bamt + ttamt;     // final bill amount = bill amount + total tip amount

    // displaying op's
    tpp.innerHTML = "Tip Per Person : &#8377;" + tppamt;
    tta.innerHTML = "Total Tip Amount : &#8377;" + ttamt;
    fba.innerHTML = "Final Bill Amount : &#8377;" + fbamt;
}

// defining a function for clearing all inputs

function clearFields()
{
    ba.value = " ";
    tp.value = " ";
    nop.value = " ";
    tpp.value = " ";
    tta.value = " ";
    fba.value = " ";
    ba.focus();
}