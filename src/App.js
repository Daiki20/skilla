

import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [callList, setCallList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://api.skilla.ru/mango/getList', {
          date_start: '2023-06-20', // Замените на начальную дату
          date_end: '2023-06-31', // Замените на конечную дату
          in_out: '1', // Замените на признак входящего или исходящего звонка: 1, 0 или оставьте пустым для всех звонков
        }, {
          headers: {
            Authorization: 'Bearer testtoken', // Замените на ваш токен авторизации
          },
        });

        console.log(response.data.results); // Проверяем данные в консоли

        setCallList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const formatDuration = (duration) => {
    // Функция для форматирования длительности звонка (в секундах) в формат "чч:мм:сс"
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const formatTime = (dateTime) => {
    // Функция для форматирования времени из полной даты и времени в формат "чч:мм:сс"
    const time = dateTime.split(' ')[1]; // Разделяем дату и время и получаем только время

    return time;
  };
  
  return (

    <div id='skilla'>
    <aside>
    <div id='menu'>
    <img src="./logo.png" alt="logo" id="logo" />
    <ul>
      <div id="nav1">    
      <img src="./Vector.png" alt="vector" id="vector" />
      <a href='#'><li>Итоги</li></a>
      </div>

      <div id="nav2">    
      <img src="./Vector-1.png" alt="vector" id="vector1" />
      <li>Заказы</li>
      </div>

      <div id="nav3">    
      <img src="./Vector-2.png" alt="vector" id="vector2" />
      <li>Сообщения</li>
      </div>

      <div id="nav4">    
      <img src="./Vector-3.png" alt="vector" id="vector3" />
      <li>Звонки</li>
      </div>

      <div id="nav5">    
      <img src="./Vector-4.png" alt="vector" id="vector4" />
      <li>Контрагенты</li>
      </div>

      <div id="nav6">    
      <img src="./Vector-5.png" alt="vector" id="vector5" />
      <li>Документы</li>
      </div>


      <div id="nav7">    
      <img src="./Vector-6.png" alt="vector" id="vector6" />
      <li>Исполнители</li>
      </div>

      <div id="nav8">    
      <img src="./Vector-7.png" alt="vector" id="vector7" />
      <li>Отчеты</li>
      </div>

      <div id="nav9">    
      <img src="./Vector-8.png" alt="vector" id="vector8" />
      <li>База знаний</li>
      </div>

      <div id="nav10">    
      <img src="./Vector-9.png" alt="vector" id="vector9" />
      <li>Настройки</li>
      </div>
      
 
    </ul>

    </div>
    <div id='btn'>
      <div id='order'>
        <p>Добавить заказ</p>
        <img src="./Vector-11.png" alt="vector" id="vector11" />
      </div>

      <div id='payment'>
        <p>Оплата</p>
        <img src="./Vector-12.png" alt="vector" id="vector12" />
      </div>
</div>
    </aside> 

    <div id='main'>
      <div id='header'>
      <header>
        <div id='date'>
        <div><p>Среда, 13окт</p></div>
        </div>

      <div id='procent'>
        <div id='procent1'>
        <div><p>Новые звонки</p></div>
        <div><p>20 из 30 шт</p></div>
        </div>

        <div id='procent1'>
        <div><p> Качество разговоров</p></div>
        <div><p>40%</p></div>
        </div>

        <div id='procent1'>
        <div><p> Конверсия заказов </p></div>
        <div><p>67%</p></div>
        </div>
      </div>

      <div id='log'>
          <div id='search'>
            <div><img src="./search.png" alt="search" /></div>
          </div>

          <div id='akk'>
              <p>ИП Сидорова Александра Михайловна</p>
              <img src="./galka.png" alt="open" id='galka' />
          </div>

          <div id='avatar'>
          <img src="./img.png" alt="avatar" id='photo' />
          <img src="./galka.png" alt="open" id='galka'/>
          </div>
      </div>
        </header> </div>

      <div id='db'>
        <div id='date-balance'>
          <div id='balance'>
            <p>Баланс:</p>
            <p>272 ₽</p>
            <img src="./plus.png" alt="open" />
          </div>

          <div id='calendar'>
          <img src="./left.png" alt="swipe" id='btn-left'/>
          <img src="./icon-calendar.png" alt="open" id='icon-calendar' />
          <p>3 дня</p>
          <img src="./right.png" alt="swipe" id='btn-right'/>
          </div>
        </div></div>


        <div id='filter'>

            <div id='search-phone'>
             <img src="./search.png" alt="search" />
              <p>Поиск по звонкам</p>
            </div>

            <div id='open-filter'>
                <div id='one-filter'>
                  <p>Все типы</p>
                  <img src="./galka.png" alt="open" id='galka'/>
                </div>

                <div id='two-filter'>
                  <p>Все сотрудники</p>
                  <img src="./galka.png" alt="open" id='galka'/>
                </div>

                <div id='three-filter'>
                  <p>Все звонки</p>
                  <img src="./galka.png" alt="open" id='galka'/>
                </div>

                <div id='four-filter'>
                  <p>Все источники</p>
                  <img src="./galka.png" alt="open" id='galka'/>
                </div>

                <div id='five-filter'>
                  <p>Все оценки</p>
                  <img src="./galka.png" alt="open" id='galka'/>
                </div>

                <div id='six-filter'>
                  <p>Все ошибки</p>
                  <img src="./galka.png" alt="open" id='galka'/>
                </div>

            </div>
        </div>

          <div id='contacts'>
            
              <div id='info'><div id='type'>
                  <div id='info1'> 
                      <p>Тип</p>
                  </div>

                  <div id='info2'> 
                      <p>Время</p>
                  </div>

                  <div id='info3'> 
                      <p>Сотрудник</p>
                  </div>

                  <div id='info4'> 
                      <p>Звонок</p>
                  </div>
                  </div>
                    <div id='type2'>
                  <div id='info5'> 
                      <p>Источник</p>
                  </div>

                  <div id='info6'> 
                      <p>Оценка</p>
                  </div>
                  </div>

                  <div id='info7'> 
                      <p>Длительность</p>
                  </div>

              </div>

          </div>

          <div id="list">
      {callList.map((call, index) => (
        
        <div key={call.id} id='pers'>
          <img  id='top' src='./top.png'/>
          <div id='call-date'> {formatTime(call.date)}</div>
          <img id='avatarr' src={call.person_avatar} alt="Аватар" />
          <div> {call.from_number}</div>
          <div id='sourse'>{call.source}</div>
          <div>{formatDuration(call.time)}</div>
        </div>
      ))}
   
  </div>
    </div>
    </div>
    
  );
}

export default App;
