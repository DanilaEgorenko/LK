import { paymentsModel } from '@entities/payments'
import { Contract, LeftBlock, PageWrapper, PaymentList, PaymentsInfo, RightBlock } from '@features/payments'
import { Title } from '@ui/atoms'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'

const DormitoryPayments = () => {
    const { data } = paymentsModel.selectors.usePayments()
    if (!data?.dormitory) return null
    console.log(data)

    return (
        <PageWrapper>
            {data.dormitory.map((dormitory, i) => {
                return (
                    <div className="blocks-wrapper" key={i}>
                        <LeftBlock>
                            <Title size={2} align="left" bottomGap>
                                Оплата за общежитие
                            </Title>
                            <div className="payment-block-content">
                                <PaymentList payments={dormitory?.payments ?? []} />
                                <PaymentsInfo
                                    balanceCurrDate={getCorrectNumberFormat(dormitory?.balance_currdate ?? '0')}
                                    monthly={650}
                                    startDate={dormitory?.startDate}
                                    endDate={dormitory?.endDatePlan}
                                    sum={Number(dormitory?.sum) ?? 0}
                                    allPayments={
                                        dormitory?.payments?.reduce((acc, curr) => {
                                            return acc + getCorrectNumberFormat(curr.value)
                                        }, 0) ?? 0
                                    }
                                    qr_current={dormitory.qr_current}
                                    qr_total={dormitory.qr_total}
                                />
                            </div>
                        </LeftBlock>
                        <RightBlock>
                            <Title size={2} align="left" bottomGap>
                                Реквизиты договора
                            </Title>
                            <Contract contract={dormitory} />
                        </RightBlock>
                    </div>
                )
            })}
        </PageWrapper>
    )
}

export default DormitoryPayments
