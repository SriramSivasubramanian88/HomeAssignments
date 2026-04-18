function gradeCalculation(score){
    let grade;
    switch(score){
        case "90":
            grade = "A+";
            break;
            case "80":
                grade = "A";
                break;
                case "70":
                    grade = "B+";
                    break; 
                    case "60":
                        grade = "B";
                        break; 
                        default:
                            grade = "C";
                            break;
    }
    return grade;
}

console.log(gradeCalculation("100"));