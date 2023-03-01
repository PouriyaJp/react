import {CURRENTLINE, CYAN, ORANGE, PURPLE, RED} from "../../helpers/colors";

const Contact = () => {
    return(
        <div className="col-md-6">
            <div className="card my-2" style={{ backgroundColor: CURRENTLINE }}>
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAD21JREFUeF7tnOWy5bgOhXOamZkZ3/8t+m8zMzPz1Np1vctHY4py1H01Xqmamqk5cSx/0pIVx94LFy5c+D3wIgESSBJYoEAYGSSQJ0CBMDpIoECAAmF4kAAFwhggAR0BziA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QoEA6cTSHqSNAgei4sVUnBCiQThzNYeoIUCA6bmzVCQEKpBNHc5g6AhSIjhtbdUKAAunE0RymjgAFouPGVp0QWDKBrFq1ati1a9ewefPmAf+9bNmyOcJfv34N3759G96+fTs8e/Zs9t9jru3btw87duwY1q5dOyxfvnze9OfPn8PHjx+H58+fD2/evBnzyNm969evn9m8cePGYcWKFcPCwsLs/8Per1+/Dq9evZo9G/38Fy+Me+fOncOGDRsWjf/3798zBp8/fx5evnw5vHjxYvTwd+/ePcBvq1evnscCnguW79+/n3HFv8deVrGQs2NJBLJv375ZoMXBm+vwx48fw5MnT4anT59W2UBohw4dGjZt2jQP3lQjgH/37t1w7969ZvG12gyhPHjwQCXA6gD/0g2tXIN5nz59mjFoCWgknYMHD86ST+mCAJGA8NyWBNRqsyYWSnZOFsiRI0eGbdu2FQNYGgA4yEwI6Ny1Zs2a4fDhw7Ps1np9+PBhuHv37vDly5diE4gOmSie5UoNvn//PnMkHOr9Atdjx47NZuMxVwsDzEhgiz5aLgQzZn74rCQSy1io2TlJIMjCmErjQEPGff369UwACFRkkq1bt84CEmVMuADk4cOHs6k2dUnhQVQo0cLUjFIOZRf+HUojAEcQ37lzJztulBT79+9fNNshQ6L0g7NWrlw5e660F+XGrVu3quKrAf/bfz958uRsRg4XmKFMBTf8A7/AX0h6uC/2bYkBqgcIL342noVnIhbQB54J/oiJuJwFe8RC7rKKhRZfqAUCVR8/fnxRtkCZgyBKZYNU5kJgXrt27V/3I0APHDgwD+KSmPbs2TPgn1DeoYS7f/9+MttLG0qCktkQ96IWL816LcD/5j0ITnANQY+kUwrOVDJBgkoxQLKEH0Lg4z0T9yGpyUvO4Eiqt2/fnolIXlax0OoHtUAAY+/evXPYLRkW2R5lE7I0LjgIpYucRU6cODGbGXC1BCaAA2RwDpxy48aNfzGQNucEGhoi46GeDjNfyZGtwP/mfTFX2IHsjsAsXZhtUSUEtqgKbt68uWgmRXI6derUsG7durlfHz9+PHvXzF2tPm69L/TTGgutflALBLPHli1b5kGMTIRgr12YhjGFhwtZGTVouJC5jx49OhcRal84sfSCiCkbz8WLHC5kL8xkMiPBiXh+EB4c+OjRo6LJsYMg6Jrja+P/W3+XjDDTohRNZfjYRsy6YIDVKFyYzTEzxO9jKEeRSMIsjmR59erV4nsFkg+CObRJJSvLWGj1g1og586dm7/opaDlDJBTMd5XEMzhklkewkAZVrtiwaYCWQZIi/DQp7QH7ynIoN4uGZAI4kuXLjUNI04sYIv3BSTEOGujHMslvVwnZ8+enc86ECyEh3iwjoWmQf/vJpVAsAKCjIEpFVMvBFLL8sGomkDwQoaMFK5czSsHidoaS82hFMCLYfyyjhIMNof6Gxnr8uXLVVYo9WBTKLNQYly5cqVpaTJ+OLIhnhNmOfwNq24oBUsrOJhNEdzhKtX2pcFg/CiVUN6CAfpuSTx4Zk0g8u+ts2xcTaCUljO6VSxUnR7doBLImA7kvbUSSwsb4kC9HAQgZx4pzNaZQJYYrTNPipGcjRAUpdJU3p/K3lN80dK2pcQ6f/78fLEmNRPk+pFJTZbbVrHQMu5wzx8ViCxzUg6PYSOzYkUKs0HtknUwMv3FixfnzbA4gCw6tgzA/VqbUjbLBAHB4R1MvgvIGadlCbvGSPN3KVIsVGDWC9+aNO8JuWpCJjUt91osjOHwRwWCIIXxuRWRKdlaOkqWQrXpvARNZjKIVrP9An2klrsRGHivCaVW6ptCyyrhGMe33JuyVa58pUrQODGV+pGBHAvEMhZaxv7HZxC5pp6qOadko1pbzQpWgDSlbcoZkoX8HiGXVlG2YJbR7DcbEwzyXvmBLlVeTsnWpbY1f5bGNaWtfO4fmUGQZbCkF7+gyqwJw6YMrNZ2SpBPaZtzpAw+vHxjUQGzB2basChQ+5g3RQClthAp3uvCOx0SGvbPyS/eFMhED6TEkVuJqQX5lKwxJcintM3ZnCpf8B6CVabwwQ1tsTvh+vXrE70wrrkUR7AjtUuCAhnHdtHd+JCIpdV45ihteutJIAAlv9RL1PKFeIIrmpumxFHaBEqBNKNdfCPqbCytxhsUaztCexMIiMmlzkCxtplT6ZZsM5R2sCVeRMHNtR3SFIjCE6mzFiirsPpTetGEk86cOTNfUx/zzaG2ihV/dEotEJSGuZSrWLKf1IoV7MPSdrwFR+GG5ia5sxZ4T8R7UemAG3bvgm3YXyeX10tGlFaxLGOhGcwwDEv6kp7LQigVII7avh8YbrX2/f/yHSTlHLmJEPfkNlyOcW7LvakDTuHQEXZH1A4zTZn15cfb//R3EGQhBGF8HgAOwoZBZKHaIabgzNq2hpzTx35Jl3vAcs+dsh7fEqCpMzVoh9UrrBrVNlO29JG7J/WOqJm95Jf0lk2QqfKy9iVd7gHTxsIYZksygyCIMM3GxyzHZKHY4DjT17ZixO1q2xbkZj3U1thxWrumfAirPTu1Pytuo913VesXf8euAryQy0NsECX2Uo254kNYY7bD1D7eWsXCmLFNFkhquVKThYLR2t2ztX07rVviJTztHq6aE1LvHljSxRXPwqVDaLU+cn9PLaDgYyQytGaHAL5xxbt5WzaYYvynT5+e7whv2c3bun+uFgtjuE0SSMrJUz9syZo2d7YjHmTrVnYNOHlgp+UMSYsD5HJqmC3QNj5UlvtA19JH6p7cd6naAkqpP/myXTuIhmeltt/LMySWsdDKb5JA5NdgvNBppmhprAzK2oqO3OPVeqKwtr9JHvdsEWsL+NTJyvjoq9VWk9RsP2YBJTe21InC2vuTPBufm3WsYqHFT7hHLZDafqJWA1L3pc4h54SHY7845xBOpkGkONmYKhVSZ9JRwqRWaxDE+MgZTtLBTnnGRDNG2Amnx7/WIsso3IMDYOH0I/ppOTtSs2epzpak+pGlaKlkkwmttJxvFQs1VuHvKoHIjIGHIbvCiSgJxlxY3UqdXZbbwvFczAwIfPw79asm6Ld2zlqudqENZhJkMLS1/lUTeWY6t90dK0zxnqyWs/kl7qmv9vAXZpCxF94F5PeslPCRrHAf2OZ+1aSlhLSKhZZxqwQifx2jpaPcPbkjtZrfb6p99Q02jP0tr9oOgNbxy2xYCw65MleaHWs2yNmjdn/u76WPrKn3m1I/Y34Xa+xvebXGQo2DSiDyo1utk9LfS2fOIRKUOSg1whmS1LM0v6aH5+LlsvZrkEv1y4ot50Dk2FIzde29Kcc6/g2BKf6q7UKAryDseMNlqr+xv6xoGQslHiqBxKtBU2CjbcuPMpR+jxUBg7Kr5dShtLX027woGVEeoPyrfU1uYZA6W5E6SSifJUsjzclCuRrUYq9mBonblH6bF6tceKcMy9pj7LGKhZwNKoGMGRDvJQHPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBCgQz96j7eYEKBBzxOzAMwEKxLP3aLs5AQrEHDE78EyAAvHsPdpuToACMUfMDjwToEA8e4+2mxOgQMwRswPPBP4BllxE5CytJmAAAAAASUVORK5CYII="
                                 alt="" style={{ border: `1px solid ${PURPLE}` }} className="img-fluid rounded" />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">
                                    نام و نام خانوادگی
                                    {" : "}
                                    <span className="fw-bold">
                                                    پوریا جمشیدپور
                                                </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    شماره همراه
                                    {" : "}
                                    <span className="fw-bold">
                                                    09380123465
                                                </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    آدرس ایمیل
                                    {" : "}
                                    <span className="fw-bold">
                                                    pouriya2910@gamil.com
                                                </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <button className="btn my-1" style={{ backgroundColor: ORANGE }}>
                                <i className="fa fa-eye"></i>
                            </button>
                            <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                                <i className="fa fa-pen"></i>
                            </button>
                            <button className="btn my-1" style={{ backgroundColor: RED }}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;