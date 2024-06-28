$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#tarefa').val().trim();
        if (tarefa) {
            $('#lista-tarefas').append('<li>' + tarefa + '</li>');
            $('#tarefa').val('');
        }
    });

    
    $(document).on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});