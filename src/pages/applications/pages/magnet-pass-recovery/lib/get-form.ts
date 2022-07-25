import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Запрос на восстановление магнитного пропуска',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Прошу восстановить мой магнитный пропуск в связи с:(укажите причину)',
                type: 'text',
                fieldName: 'reason',
                value: '',
                editable: true,
                required: true,
            },
        ],
        hint: 'Порядок действий:           \n1. Заполнить это заявление.           \n2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.            \n3. Оплатить услугу по изготовлению нового пропуска в банке, получить квитанцию об оплате.            \n4. Предоставить заявление и квитанцию об оплате в бюро пропусков (Центральная проходная).            \n5. Получить готовый пропуск в бюро пропусков (Центральная проходная).            \nСрок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления.',
    }
}

export default getForm