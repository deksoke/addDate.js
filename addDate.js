//Author: Taywan Kamolwilad
//Email: taywan.kd@gmail.com

(function (win) {

    //milliseconds
    if (Date.prototype.addMilliseconds == undefined) {
        Date.prototype.addMilliseconds = function (num) {
            this.setMilliseconds(this.getMilliseconds() + num);
            return this;
        };
    }

    //seconds
    if (Date.prototype.addSeconds == undefined) {
        Date.prototype.addSeconds = function (num) {
            this.setSeconds(this.getSeconds() + num);
            return this;
        };
    }

    //minutes
    if (Date.prototype.addMinutes == undefined) {
        Date.prototype.addMinutes = function (num) {
            this.setMinutes(this.getMinutes() + num);
            return this;
        };
    }

    //hours
    if (Date.prototype.addHours == undefined) {
        Date.prototype.addHours = function (num) {
            this.setHours(this.getHours() + num);
            return this;
        };
    }

    //days
    if (Date.prototype.addDays == undefined) {
        Date.prototype.addDays = function (num) {
            this.setDate(this.getDate() + num);
            return this;
        };
    }

    //months
    if (Date.prototype.addMonths == undefined) {
        Date.prototype.addMonths = function (num) {
            this.setMonth(this.getMonth() + num);
            return this;
        };
    }

    //years
    if (Date.prototype.addYears == undefined) {
        Date.prototype.addYears = function (num) {
            this.setFullYear(this.getFullYear() + num);
            return this;
        };
    }

})(this);
