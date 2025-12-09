-- https://school.programmers.co.kr/learn/courses/30/lessons/301649
-- 대장균 크기 기준 백분위를 계산하고, 구간별 레이블 분류
with ranked as (
    select 
        id, 
        size_of_colony,
        percent_rank() over (order by size_of_colony desc) as pr
    from ecoli_data
)

select 
    id,
    case 
        when pr > 0.75 then 'LOW'
        when pr > 0.5 then 'MEDIUM'
        when pr > 0.25 then 'HIGH' 
        else 'CRITICAL'
     end as colony_name
from ranked
order by id