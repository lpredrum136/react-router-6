import { useParams } from 'react-router-dom'
import { invoices } from '../data/invoices'

const Invoice = () => {
  const params = useParams<{ invoiceId: string }>()

  const invoice = invoices.find(
    invoice => invoice.id.toString() === params.invoiceId
  )

  return (
    <h2 style={{ padding: '1rem' }}>
      Invoice #{invoice?.id} for {invoice?.name}
    </h2>
  )
}

export default Invoice
