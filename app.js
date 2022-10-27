var Name = []; //categorical
var Age = [];
var Height = [];
var Weight = [];
var Overall = [];
var Potential = [];
var BestPosition = []; //categorical
var Club = []; //categorical
var Nationality = []; //categorical
var ValueEUR = [];
var WageEUR = [];
var PreferredFoot = []; //categorical
var SkillMoves = []; //categorical
var PaceTotal = [];
var ShootingTotal = [];
var PassingTotal = [];
var DribblingTotal = [];
var DefendingTotal = [];
var Crossing = [];
var Finishing = [];
var Jumping = [];
var Stamina = [];
var Vision = [];
var BallControl = []
var FKAccuracy = [];
var Penalties = [];


d3.csv("data/processed_fifa22.csv", function(data) {
    // console.log(data);
    data.forEach((d) => {
        Age.push(+d.Age);
        Height.push(+d.Height);
        Weight.push(+d.Weight);
        Overall.push(+d.Overall);
        Potential.push(+d.Potential);
        ValueEUR.push(+d.ValueEUR);
        WageEUR.push(+d.WageEUR);
        PaceTotal.push(+d.PaceTotal);
        ShootingTotal.push(+d.ShootingTotal);
        PassingTotal.push(+d.PassingTotal);
        DribblingTotal.push(+d.DribblingTotal);
        Crossing.push(+d.Crossing);
        Finishing.push(+d.Finishing);
        Jumping.push(+d.Jumping);
        Stamina.push(+d.Stamina);
        Vision.push(+d.Vision);
        BallControl.push(+d.BallControl);
        FKAccuracy.push(+d.FKAccuracy);
        Penalties.push(+d.Penalties);
        Name.push(d['Name']);
        BestPosition.push(d['BestPosition']);
        Club.push(d['Club']);
        Nationality.push(d['Nationality']);
        PreferredFoot.push(d['PreferredFoot']);
        SkillMoves.push(d['SkillMoves']);          
    });
    // console.log("Age: ",Age);
    // console.log("Height: ",Height);
    // console.log("Weight: ",Weight);
    // console.log("Overall: ",Overall);
    // console.log("Potential: ",Potential);
    // console.log("ValueEUR: ",ValueEUR);
    // console.log("WageEUR: ",WageEUR);
    // console.log("PaceTotal: ",PaceTotal);
    // console.log("Shooting: ",ShootingTotal);
    // console.log("Dribbling: ",DribblingTotal);
    // console.log("Crossing: ",Crossing);
    // console.log("Finishing: ",Finishing);
    // console.log("Jumping: ",Jumping);
    // console.log("Stamina: ",Stamina);
    // console.log("Vision: ",Vision);
    // console.log("Ball control: ",BallControl);
    // console.log("Freekick: ",FKAccuracy);
    // console.log("Penalties: ",Penalties);

    // console.log("Name: ",Name);
    // console.log("Best Position: ",BestPosition);
    // console.log("Club: ",Club);
    // console.log("Nationality: ",Nationality);
    // console.log("Preferred Foot: ",PreferredFoot);
    // console.log("Skills: ",SkillMoves);
    var bin_no=15;

    function age(){
        var str="Age";
        console.log(Age, str, bin_no)
       plot_hist(Age,str,bin_no);  
    }
    function height(){
        var str="Height (cms)";
        console.log(Height, str, bin_no)
       plot_hist(Height,str,bin_no);  
    }
    // function weights(){
    //     var str="Weight";
    //     console.log(Weight, str, bin_no)
    //    plot_hist(Weight,str,bin_no);  
    // }
    function overall(){
        var str="Attribute Rating - Overall";
        console.log(Overall, str, bin_no)
       plot_hist(Overall,str,bin_no);  
    }  
    function potential(){
        var str="Attribute Rating - Potential";
        console.log(Potential, str, bin_no)
       plot_hist(Potential,str,bin_no);  
    }   
    function value_eur(){
        var str="Value (EUR)";
        console.log(ValueEUR, str, bin_no)
       plot_hist(ValueEUR,str,bin_no);  
    }
    function wage_eur(){
        var str="Wage (EUR)";
        console.log(WageEUR, str, bin_no)
       plot_hist(WageEUR,str,bin_no);  
    }
    function pace(){
        var str="Attribute Rating - PaceTotal";
        console.log(PaceTotal, str, bin_no)
       plot_hist(PaceTotal,str,bin_no);  
    }
    function shooting(){
        var str="Attribute Rating - ShootingTotal";
        console.log(ShootingTotal, str, bin_no)
       plot_hist(ShootingTotal,str,bin_no);  
    }
    function passing(){
        var str="Attribute Rating - PassingTotal";
        console.log(PassingTotal, str, bin_no)
       plot_hist(PassingTotal,str,bin_no);  
    }
    function dribbling(){
        var str="Attribute Rating - DribblingTotal";
        console.log(DribblingTotal, str, bin_no)
       plot_hist(DribblingTotal,str,bin_no);  
    }
    function crossing(){
        var str="Attribute Rating - Crossing";
        console.log(Crossing, str, bin_no)
       plot_hist(Crossing,str,bin_no);  
    }
    function finishing(){
        var str="Attribute Rating - Finishing";
        console.log(Finishing, str, bin_no)
       plot_hist(Finishing,str,bin_no);  
    }
    function jumping(){
        var str="Attribute Rating - Jumping";
        console.log(Jumping, str, bin_no)
       plot_hist(Jumping,str,bin_no);  
    }
    function stamina(){
        var str="Attribute Rating - Stamina";
        console.log(Stamina, str, bin_no)
       plot_hist(Stamina,str,bin_no);  
    }
    function vision(){
        var str="Attribute Rating - Vision";
        console.log(Vision, str, bin_no)
       plot_hist(Vision,str,bin_no);  
    }
    function ballcontrol(){
        var str="Attribute Rating - Ball Control";
        console.log(BallControl, str, bin_no)
       plot_hist(BallControl,str,bin_no);  
    }
    function fk_accuracy(){
        var str="Attribute Rating - Freekick Accuracy";
        console.log(FKAccuracy, str, bin_no)
       plot_hist(FKAccuracy,str,bin_no);  
    }
    function penalties(){
        var str="Attribute Rating - Penalties";
        console.log(Penalties, str, bin_no)
       plot_hist(Penalties,str,bin_no);  
    }
//////////////////////////////////////////

$("#barhistselect").on("change", function(){
    var node = document.getElementById('barhistselect');
    var drop_down_selected = node.options[node.selectedIndex].value
    console.log(drop_down_selected)


    // $("#toggle_bar").on('change', function() {
    // //console.log(document.getElementsByClassName("toogle"))
    //     if ($(this).is(':checked')) {
    //         switchStatus = $(this).is(':checked');
    //        console.log(switchStatus);// To verify
    //     }
    //     else {
    //        switchStatus = $(this).is(':checked');
    //        console.log(switchStatus);// To verify
    //     }
    // });

    if(!$(this).is(':checked')){
        function nationality(){
            var str="Nationality";
            plot_bar(str);
        }
        // function name(){
        //     var str="Name";
        //     plot_bar(str);
        // }
        function bestposition(){
            var str="BestPosition";
            plot_bar(str);
        }    
        function club(){
            var str="Club";
            plot_bar(str);
        }
        function prefereed_foot(){
            var str="PreferredFoot";
            plot_bar(str);
        }
        function skills(){
            var str="SkillMoves";
            plot_bar(str);
            console.log("a")
            //rev_plot(str);
        }
        }
        else{
            function nationality(){
                var str="Nationality";
                rev_plot(str);
            }
            // function name(){
            //     var str="Name";
            //     plot_bar(str);
            // }
            function bestposition(){
                var str="BestPosition";
                rev_plot(str);
            }    
            function club(){
                var str="Club";
                rev_plot(str);
            }
            function prefereed_foot(){
                var str="PreferredFoot";
                rev_plot(str);
            }
            function skills(){
                var str="SkillMoves";
                //plot_bar(str);
                console.log("a")
                rev_plot(str);
            }
        }
    

    if(drop_down_selected === "Age"){
        age()
    }
    else if(drop_down_selected === "Height"){
        height() 
    }
    // else if(drop_down_selected === "Weight"){
    //     weights()
    // }
    else if(drop_down_selected === "Overall"){
        overall() 
    }
    else if(drop_down_selected === "Potential"){
        potential() 
    }
    else if(drop_down_selected === "ValueEUR"){
        value_eur() 
    }
    else if(drop_down_selected === "WageEUR"){
        wage_eur() 
    }
    else if(drop_down_selected === "PaceTotal"){
        pace() 
    }
    else if(drop_down_selected === "ShootingTotal"){
        shooting() 
    }
    else if(drop_down_selected === "PassingTotal"){
        passing() 
    }
    else if(drop_down_selected === "DribblingTotal"){
        dribbling() 
    }
    else if(drop_down_selected === "Crossing"){
        crossing() 
    }
    else if(drop_down_selected === "Finishing"){
        finishing() 
    }
    else if(drop_down_selected === "Jumping"){
        jumping() 
    }
    else if(drop_down_selected === "Stamina"){
        stamina() 
    }
    else if(drop_down_selected === "Vision"){
        vision() 
    }
    else if(drop_down_selected === "BallControl"){
        ballcontrol() 
    }
    else if(drop_down_selected === "FKAccuracy"){
        fk_accuracy() 
    }
    else if(drop_down_selected === "Penalties"){
        penalties() 
    }
//////////////////////////////////////////////////


    else if(drop_down_selected === "Nationality"){
        nationality() 
    }
    // else if(drop_down_selected === "Name"){
    //     name()
    // }
    else if(drop_down_selected === "BestPosition"){
        bestposition()
    }
    else if(drop_down_selected === "Club"){
        club()
    }
    else if(drop_down_selected == "PreferredFoot"){
        prefereed_foot()
    }
    else if(drop_down_selected == "SkillMoves"){
        skills()
    }


    function toogle_switch(){
        //var switchStatus = false;
        switchStatus = $(this).is(':checked');
        //console.log(switchStatus)
        return switchStatus
    }
///////
   
})

$("#toggle_bar").on("change", function(){
    var drop_down_selected = document.getElementById("barhistselect").value
    //console.log(new_var)
    if(!$(this).is(':checked')){

        function nationality(){
            var str="Nationality";
            plot_bar(str);
        }
        // function name(){
        //     var str="Name";
        //     plot_bar(str);
        // }
        function bestposition(){
            var str="BestPosition";
            plot_bar(str);
        }    
        function club(){
            var str="Club";
            plot_bar(str);
        }
        function prefereed_foot(){
            var str="PreferredFoot";
            plot_bar(str);
        }
        function skills(){
            var str="SkillMoves";
            plot_bar(str);
            console.log("a")
            //rev_plot(str);
        }

        if(drop_down_selected === "Nationality"){
            nationality() 
        }
        // else if(drop_down_selected === "Name"){
        //     name()
        // }
        else if(drop_down_selected === "BestPosition"){
            bestposition()
        }
        else if(drop_down_selected === "Club"){
            club()
        }
        else if(drop_down_selected == "PreferredFoot"){
            prefereed_foot()
        }
        else if(drop_down_selected == "SkillMoves"){
            skills()
        }


        }
        else{
            function nationality(){
                var str="Nationality";
                rev_plot(str);
            }
            // function name(){
            //     var str="Name";
            //     plot_bar(str);
            // }
            function bestposition(){
                var str="BestPosition";
                rev_plot(str);
            }    
            function club(){
                var str="Club";
                rev_plot(str);
            }
            function prefereed_foot(){
                var str="PreferredFoot";
                rev_plot(str);
            }
            function skills(){
                var str="SkillMoves";
                //plot_bar(str);
                console.log("a")
                rev_plot(str);
            }

            if(drop_down_selected === "Nationality"){
                nationality() 
            }
            // else if(drop_down_selected === "Name"){
            //     name()
            // }
            else if(drop_down_selected === "BestPosition"){
                bestposition()
            }
            else if(drop_down_selected === "Club"){
                club()
            }
            else if(drop_down_selected == "PreferredFoot"){
                prefereed_foot()
            }
            else if(drop_down_selected == "SkillMoves"){
                skills()
            }

        }

})


});