-- https://school.programmers.co.kr/learn/courses/30/lessons/293261
with ranked as (
    select 
        id,
        fish_type,
        rank() over(partition by fish_type order by length desc) as rn,
        length
    from fish_info
    where length is not null
)

select 
    r.id,
    n.fish_name,
    r.length
from ranked r
join fish_name_info n
    using (fish_type)
where r.rn = 1
order by id