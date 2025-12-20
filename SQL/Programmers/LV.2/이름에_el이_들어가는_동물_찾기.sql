select i.animal_id, i.name
from animal_ins i
where i.name like '%el%'
    and i.animal_type = 'dog'
order by  i.name