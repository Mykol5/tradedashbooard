$(function(){if($(mt4Accounts).length>0){$('#current_group').val(mt4Accounts[$('#account').val()]['group']);$('#account').change(function(){var current_group=mt4Accounts[$('#account option:selected').val()]['group'];$('#current_group').val(current_group);});}});