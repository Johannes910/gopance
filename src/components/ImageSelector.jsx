import {useRef,useState,useEffect} from 'react';
import styles from "../css/imagesSelec.css";
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import img from "../assets/images/defaultpfp.png"
import {Button} from 'primereact/button';
import { useAsyncError } from 'react-router-dom';
import Avatar from 'react-avatar-edit';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";      



export const ImageSelector = () => {


    const [image, setImage] = useState("");
    const [imageCrop, setImageCrop] = useState("");
    const [src, setSrc] = useState(false);
    const [profile,setProfile] = useState([]);
    const [pview, setPview] = useState(false);

    const profileFinal = profile.map((item)=> item.pview);

    const onClose = () =>{
        setPview(null);
    };

    const onCrop = (view) =>{
        setPview(view);
    };
    const saveCropImage = () => {
        setProfile([...profile, {pview}]);
        setImageCrop(false);
    };

    const save = () =>{
        saveCropImage();

    }
    

    return (
        <>

        
            <div className='profile_img text-center p-4'>
                <div className="flex flex-column justify-content-center align-items-center">
                    <img id="imagen" className='imgSelec' alt="" onClick = {() => setImageCrop(true)}
                    src={profileFinal.length ? profileFinal:img}
                    />
                    
                    <Dialog 
                    visible={imageCrop}
                    header={() => (
                        <p className="text-2xl font-semibold imageUp">
                            Agregar Imagen
                        </p>
                    )}
                    onHide={() => setImageCrop(false)}
                    style={{
                    backgroundColor:'#474649',
                    shadingColor: '#474649'
                    }}>

                    <div className='confirmation-content flex flex-column align-items-center'>
                        <Avatar
                        width={500}
                        height={400}
                        onCrop={onCrop}
                        onClose={onClose}
                        src={src}
                        shadingColor={"#474649"}
                        backgroundColor={"#474649"}
                        />

                        <div className='flex flex-column align-items-center mt-5 w-12'>
                            <div className='flex justify-content-around w-12 mt-4'>
                                <Button
                                onClick={save}
                                label="Guardar"
                                icon="pi pi-check"
                                />

                            </div>

                        </div>

                    </div>
                    </Dialog>
                
                </div>
            </div>
        
        </>
    )
}