// switch case

        // first type of scenario 
        //we will compose the value of the variable directly

        let a = 10;

        // switch (a){
        //     case 10:
        //         console.log("value is 10");
        //         break; //break the flow
        //     case 15:
        //         console.log("value is 15");
        //     default:
        //         console.log("default case");
        // }

        // switch (true){
        //     case a>0:
        //         console.log("positive");
        //         break; 
        //     case a<0:
        //         console.log("negative");
        //         break;
        //     default:
        //         console.log("default case");
        //         break;
        // }


        // for loops

        // for(let i = 0; i<10; i++){
        //     console.log("value of i is ", i);
        // }
        
        
        // let i = 0;
        // for(; i<10; ){
        //     console.log("value of i is ", i);
        //     i++;
        // }

        //while loops
        // you must write the condition properly
        // at the end teh loop you should have either increment or decrement statement
        
        // let i = 0;
        // while (i<10){
        //       console.log("value of i is ". i);
        //       i++;
        // }

        //console.log("outside loops");

        //do-while loops

        // let i = 0;
        // do{
        //     console.log("value of i is :", i);
        //     i++;
        // }while(i>10)

        // nested loops 

        for(let i=0; i<5; i++){
            for(let j=0; j<2; j++){
                console.log("value of i is :", i, "and j is : ", j);
            }
        }

        // for one iteration of i, will run__times.
