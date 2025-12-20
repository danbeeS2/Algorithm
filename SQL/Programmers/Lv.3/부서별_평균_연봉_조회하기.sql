-- https://school.programmers.co.kr/learn/courses/30/lessons/284529

with dept_avg as (
    select 
        d.dept_id,
        d.dept_name_en,
        round(avg(e.sal), 0) as avg_sal
    from hr_department d
        join hr_employees e using(dept_id)
    group by d.dept_id, d.dept_name_en
)

select dept_id, dept_name_en, avg_sal
from dept_avg
order by avg_sal desc