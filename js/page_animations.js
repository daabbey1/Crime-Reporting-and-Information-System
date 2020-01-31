// Crime Reporting and Information System
//              By
//      ABBEY DICKSON AKWETEY
//              AND
//         GILBERT ASAMOAH
//     MONDAY 6TH JANUARY,2020.

$(document).ready(function() {
    $(".missing_case").hide();
    //$(".special_case").hide();
    $(".how_well_do_you_know_the_culprit").hide();
    $(".just_enough").hide();
    $(".just_little").hide();

    $(".evidence_format").hide();
    $(".picture_format").hide();
    $(".video_format").hide();
    $(".audio_format").hide();
    $(".do_you_have_evidence").hide();
    $(".submit_info").hide();

    //Missing Case
    $(".missing_item").click(function() {
        $(".how_well_do_you_know_the_culprit").hide("slow", function() {
            alert("Animation complete.");
        });
        $(".missing_case").show("slow", function() {
            alert("Animation complete.");
        });
        $(".do_you_have_evidence").show("slow", function() {
            alert("Animation complete.");
        });
    });

    //Special Case
    $(".special_item").click(function() {
        $(".missing_case").hide("slow", function() {
            alert("Animation complete.");
        });
        $(".how_well_do_you_know_the_culprit").show("slow", function() {
            alert("Animation complete.");
        });
    });

    //Enough and valid - knowledge on culprit
    $(".enough").click(function() {
        $(".just_little").hide("slow", function() {
            alert("Animation complete.");
        });
        $(".just_enough").show("slow", function() {
            alert("Animation complete.");
        });
        $(".do_you_have_evidence").show("slow", function() {
            alert("Animation complete.");
        });
    });

    //Just little and valid - knowledge on culprit
    $(".little_valid").click(function() {
        $(".just_enough").hide("slow", function() {
            alert("Animation complete.");
        });
        $(".just_little").show("slow", function() {
            alert("Animation complete.");
        });
        $(".do_you_have_evidence").show("slow", function() {
            alert("Animation complete.");
        });
    });

    //Just little and not too sure - knowledge on culprit
    $(".little_not_sure").click(function() {
        $(".just_enough").hide("slow", function() {
            alert("Animation complete.");
        });
        $(".just_little").show("slow", function() {
            alert("Animation complete.");
        });
        $(".do_you_have_evidence").show("slow", function() {
            alert("Animation complete.");
        });
    });


    //No - don't show evidence formate
    $(".no").click(function() {
        $(".evidence_format").hide("slow", function() {
            alert("Animation complete.");
        });
        $(".submit_info").show("slow", function() {
            alert("Animation complete.");
        });
    });


    //Yes - to show evidence formate
    $(".yes").click(function() {
        $(".evidence_format").show("slow", function() {
            alert("Animation complete.");
        });
        $(".submit_info").show("slow", function() {
            alert("Animation complete.");
        });
    });


    $(".picture").click(function() {
        $(".picture_format").show("slow", function() {
            alert("Animation complete.");
        });
    });

    $(".video").click(function() {
        $(".video_format").show("slow", function() {
            alert("Animation complete.");
        });
    });

    $(".audio").click(function() {
        $(".audio_format").show("slow", function() {
            alert("Animation complete.");
        });
    });
});




// $(document).ready(function() {
//     //$(".btn1").click(function() {
//     $("p").hide();
//     //});
//     $(".btn2").click(function() {
//         $("p").show();
//     });
// });


// < p > This is a paragraph. < /p>

// <button class = "btn1" > Hide < /button>
// <button class = "btn2" > Show < /button>