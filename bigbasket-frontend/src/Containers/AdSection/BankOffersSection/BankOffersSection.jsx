import "./BankOffers.css"
function BankOfferSection() {


    return (
        <div className="container p-1 mt-4">
            <p className="text-center " style={{"margin-bottom":"-1px", "color":"#564444","font-size": "22px"}}>Bank Offers</p>
            <hr/>
            <br/>
        <div className=" row" style={{"display": "flex",
                "justify-content": "space-between"}}>

        <img className="col-lg-3 col-md-3 col-sm-6 col-6 adsImg " src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_paytm_360_11082022.jpg"
          />
        <img className="col-lg-3 col-md-3 col-sm-6 col-6 adsImg"  src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_rbl_360_110822.jpg" />
        <img className="col-lg-3 col-md-3 col-sm-6 col-6 adsImg"  src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_indus_360_110822.jpg"/>
        <img  className="col-lg-3 col-md-3 col-sm-6 col-6 adsImg" src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_m_aff_dbs_360_110822.jpg" />

         </div>
        </div>
    );
} export default BankOfferSection;