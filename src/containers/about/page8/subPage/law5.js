import React from "react";
import Header from 'component/header/header';
import SubBanner from 'component/subBanner/subBanner'
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import "./law.scss";

export default class Law1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="law">
                <Header />
                <SubBanner />
                <div className="page law">
                    <h5>网贷风险教育</h5>
                    <p>
                        • Q1:什么是“互联网金融”？
                    </p>
                    <p>
                         • A1:互联网金融是传统金融机构与互联网企业利用互联网技术和信息通信技术实现资金融通、支付、投资和信息中介服务的新型金融业务模式。互联网与金融深度融合是大势所趋，将对金融产品、业务、组织和服务等方面产生更加深刻的影响。促进互联网金融健康发展，有利于提升金融服务质量和效率，深化金融改革，促进金融创新发展，扩大金融业对内对外开放，构建多层次金融体系。 
                    </p>
                    <p>
                        • Q2: 什么是网络借贷？
                    </p>
                    <p>
                        • A2: 网络借贷是指个体和个体之间通过互联网平台实现的直接借贷。个体包含自然人、法人及其他组织。
                    </p>
                    <p>
                        • Q3: 什么是网络借贷信息中介机构？
                    </p>
                    <p>
                        • A3: 网络借贷信息中介机构是指依法设立，专门从事网络借贷信息中介业务活动的金融信息中介公司。该类机构以互联网为主要渠道，为借款人与出借人（即贷款人）实现直接借贷提供信息搜集、信息公布、资信评估、信息交互、借贷撮合等服务。
                    </p>
                    <p>
                        • Q4: 网络借贷通常可能面临哪些风险？
                    </p>
                    <p>
                        • A4: 可能面临的风险有：出借风险、市场风险、政策风险、信息传递风险、借款项目不成立风险、流动性风险、不可抗力风险等。网络平台的借款项目与银行存款不同，平台不保本保息，出借人应当理性面对并承担相应的借款客户违约等风险。
                    </p>
                    <p>
                        • Q5: 哪类人群适合在网络借贷平台投资？
                    </p>
                    <p>
                        • A5: 出借人应当具备投资风险意识、风险识别能力、拥有非保本类金融产品投资的经历并熟悉互联网。出借人还应当按照平台要求完成风险评估测试，并选择与自身风险承受能力相当的投资产品进行投资。 • Q6: 出借人应当履行哪些义务？
                    </p>
                    <p>
                        • A6: 参与网络借贷的出借人应当履行下列义务：
                    </p>
                    <p>
                        （一）向网络借贷信息中介机构提供真实、准确、完整的身份等信息；
                    </p>
                    <p>
                        （二）出借资金为来源合法的自有资金；
                    </p>
                    <p>
                       （三）了解融资项目信贷风险，确认具有相应的风险认知和承受能力；
                    </p>
                    <p>
                        （四）自行承担借贷产生的本息损失； 
                    </p>
                    <p>
                        （五）借贷合同及有关协议约定的其他义务。
                    </p>
                    <p>
                        • Q7: 借款人应当履行哪些义务？
                    </p>
                    <p>
                        • A7: 借款人应当履行下列义务：
                    </p>
                    <p>
                        （一）提供真实、准确、完整的用户信息及融资信息；
                    </p>
                    <p>
                        （二）提供在所有网络借贷信息中介机构未偿还借款信息；
                    </p>
                    <p>
                        （三）保证融资项目真实、合法，并按照约定用途使用借贷资金，不得用于出借等其他目的；
                    </p>
                    <p>
                        （四）按照约定向出借人如实报告影响或可能影响出借人权益的重大信息； 
                    </p>
                    <p>
                        （五）确保自身具有与借款金额相匹配的还款能力并按照合同约定还款；
                    </p>
                    <p>
                        （六）借贷合同及有关协议约定的其他义务。
                    </p>
                    <p>
                        • Q8: 网络借贷中介机构应当履行哪些义务？ 
                    </p>
                    <p>
                        • A8: 网络借贷信息中介机构应当履行下列义务：
                    </p>
                    <p>
                        （一）依据法律法规及合同约定为出借人与借款人提供直接借贷信息的采集整理、甄别筛选、网上发布，以及资信评估、借贷撮合、融资咨询、在线争议解决等相关服务；
                    </p>
                    <p>
                        （二）对出借人与借款人的资格条件、信息的真实性、融资项目的真实性、合法性进行必要审核；
                    </p>
                    <p>
                        （三）采取措施防范欺诈行为，发现欺诈行为或其他损害出借人利益的情形，及时公告并终止相关网络借贷活动；
                    </p>
                    <p>
                        （四）持续开展网络借贷知识普及和风险教育活动，加强信息披露工作，引导出借人以小额分散的方式参与网络借贷，确保出借人充分知悉借贷风险；
                    </p>
                    <p>
                        （五）按照法律法规和网络借贷有关监管规定要求报送相关信息，其中网络借贷有关债权债务信息要及时向有关数据统计部门报送并登记；
                    </p>
                    <p>
                        （六）妥善保管出借人与借款人的资料和交易信息，不得删除、篡改，不得非法买卖、泄露出借人与借款人的基本信息和交易信息；
                    </p>
                    <p>
                        （七）依法履行客户身份识别、可疑交易报告、客户身份资料和交易记录保存等反洗钱和反恐怖融资义务； 
                    </p>
                    <p>
                        （八）配合相关部门做好防范查处金融违法犯罪相关工作；
                    </p>
                    <p>
                        （九）按照相关要求做好互联网信息内容管理、网络与信息安全相关工作； 
                    </p>
                    <p>
                        （十）国务院银行业监督管理机构、工商登记注册地省级人民政府规定的其他义务。
                    </p>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
}