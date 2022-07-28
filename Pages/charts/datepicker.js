
    //Script range choice
    var startDateTextBox = $('#range_example_1_start').text(JSON.stringify(
        $.datepicker.parseTime('HH:mm:ss:l z', "14:36:21:765 +2000", {})
    ));;
    var endDateTextBox = $('#range_example_1_end').text(JSON.stringify(
        $.datepicker.parseTime('HH:mm:ss:l z', "14:36:21:765 +2000", {})
    ));;
    var DateTextBox = $('#DateTextBox').text(JSON.stringify(
        $.datepicker.parseTime('HH:mm:ss:l z', "14:36:21:765 +2000", {})
    ));;

    $(function () {
        $("#DateTextBox").datepicker({
            showTimezone: false,
            maxDate: 0,
            changeMonth: true,
            changeYear: true,
        });
    });

    $('#utility_example_1').click(function () {
        alert(DateTextBox.datetimepicker('getDate'));
    });


    startDateTextBox.datetimepicker({
        format: 'D/M/YYYY H:m:s',
        showTimezone: false,
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        onClose: function (dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datetimepicker('setDate', testStartDate);

            }
            else {
                endDateTextBox.val(dateText);

            }
        },
        onSelect: function (selectedDateTime) {
            endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
        }

    });

    $('#utility_example_1').click(function () {
        alert(startDateTextBox.datetimepicker('getDate'));
    });
    endDateTextBox.datetimepicker({
        format: 'DD/MM/YYYY HH:mm:ss',
        maxDate: 0,
        showTimezone: false,
        changeMonth: true,
        changeYear: true,
        onClose: function (dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');

                if (testStartDate > testEndDate)
                    startDateTextBox.datetimepicker('setDate', testEndDate);
            }
            else {
                startDateTextBox.val(dateText);

            }
        },
        onSelect: function (selectedDateTime) {
            startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
        }
    });
    $('#utility_example_2').click(function () {
        alert(endDateTextBox.datetimepicker('getDate'));
    });
