document.addEventListener('DOMContentLoaded', function() {
    let counter = 1;
    let id = 1;

    document.addEventListener('click', function(e) {
        if (e.target.matches('section button.edit')) {
            const tr = e.target.closest('tr');
            tr.querySelectorAll('.edit, .delete').forEach(el => el.style.display = 'none');
            tr.querySelectorAll('.hidden').forEach(el => el.style.display = 'table-cell');

            const inputs = tr.querySelectorAll('input');
            inputs.forEach(input => {
                input.classList.add('active');
                input.removeAttribute('readonly');
            });

            counter++;
        } else if (e.target.matches('section button.update')) {
            const tr = e.target.closest('tr');
            tr.querySelectorAll('input').forEach(input => {
                input.classList.remove('active');
                input.setAttribute('readonly', true);
            });
            tr.querySelectorAll('.u').forEach(el => el.style.display = 'none');
        } else if (e.target.matches('section button.cancel')) {
            const tr = e.target.closest('tr');

            tr.querySelector('.c').style.display = 'none';
            tr.querySelectorAll('.edit, .delete').forEach(el => el.style.display = 'table-cell');
        } else if (e.target.matches('section button.create')) {
            id++;
            const table = document.querySelector('section table');
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${id}</td>
                <td><input type='text' class='fname active'></td>
                <td><input type='text' class='lname active'></td>
                <td><input type='date' class='age active'></td>
                <td><input type='text' class='job active'></td>
                <td><input type='text' class='salary active'></td>
                <td><button class='edit'>Edit</button></td>
                <td class='hidden u' style='display:none;'><button class='update'>Update</button></td>
                <td class='hidden c' style='display:none;'><button class='cancel'>Cancel</button></td>
                <td><button class='delete'>Delete</button></td>
            `;
            table.appendChild(tr);
        } else if (e.target.matches('section button.delete')) {
            e.target.closest('tr').remove();
        }
    });
});
