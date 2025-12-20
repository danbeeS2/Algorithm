-- https://school.programmers.co.kr/learn/courses/30/lessons/144855

with sales_january as (
    select *
    from book_sales
    where sales_date >='2022-01-01'
        and sales_date < '2022-02-01'
)

select 
    b.category,
    sum(j.sales) as total_sales
from book b
    join sales_january j using (book_id)
group by b.category
order by b.category