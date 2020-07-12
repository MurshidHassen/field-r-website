export class DemoModel {
    schoolClubName; division; nameOfCoach; districtName; contactNumber;

    constructor(schoolClubName, division, nameOfCoach, districtName, contactNumber){
        this.schoolClubName = schoolClubName
        this.division = division
        this.nameOfCoach = nameOfCoach
        this.districtName = districtName;
        this.contactNumber = contactNumber;
    }

    setSchoolName(schoolClubName){
        this.schoolClubName = schoolClubName
    }
    setDivision(division){
        this.division = division
    }
    setNameOfCoach(nameofCoach){
        this.nameOfCoach = nameofCoach
    }
    setDistrict(district){
        this.districtName = district
    }
    setContactNumber(contactNumber){
        this.contactNumber = contactNumber
    }

    getSchoolName(){
        return this.schoolClubName;
    }
    getDivision(){
        return this.division;
    }
    getNameOfCoach(){
        return this.nameOfCoach;
    }
    getDistrictName(){
        return this.districtName;
    }
    getContactNumber(){
        return this.contactNumber;
    }
}