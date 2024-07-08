import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [suffix, setSuffix] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [contact_number, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [house_no, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [subd, setSubd] = useState('');
    const [barangay, setBarangay] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postal, setPostal] = useState('');
    const [father_surname, setFSurname] = useState('');
    const [father_fname, setFFname] = useState('');
    const [father_mname, setFMName] = useState('');
    const [father_suffix, setFSuffix] = useState('');
    const [father_occu, setFOccu] = useState('');
    const [father_cn, setFCNumber] = useState('');
    const [mother_surname, setMSName] = useState('');
    const [mother_fname, setMFName] = useState('');
    const [mother_mname, setMMName] = useState('');
    const [mother_occu, setMOccu] = useState('');
    const [mother_cn, setMCNumber] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name || '');
            setMiddleName(item.middle_name || '');
            setLastName(item.last_name || '');
            setSuffix(item.suffix || '');
            setDateOfBirth(item.date_of_birth || '');
            setSex(item.sex || '');
            setCivilStatus(item.civil_status || '');
            setHeight(item.height || '');
            setWeight(item.weight || '');
            setContactNumber(item.contact_number || '');
            setEmail(item.email || '');
            setHouseNo(item.house_no || '');
            setStreet(item.street || '');
            setSubd(item.subd || '');
            setBarangay(item.barangay || '');
            setCity(item.city || '');
            setProvince(item.province || '');
            setCountry(item.country || '');
            setPostal(item.postal || '');
            setFSurname(item.father_surname || '');
            setFFname(item.father_fname || '');
            setFMName(item.father_mname || '');
            setFSuffix(item.father_suffix || '');
            setFOccu(item.father_occu || '');
            setFCNumber(item.father_cn || '');
            setMSName(item.mother_surname || '');
            setMFName(item.mother_fname || '');
            setMMName(item.mother_mname || '');
            setMOccu(item.mother_occu || '');
            setMCNumber(item.mother_cn || '');
        } else {
            setFirstName('');
            setMiddleName('');
            setLastName('');
            setSuffix('');
            setDateOfBirth('');
            setSex('');
            setCivilStatus('');
            setHeight('');
            setWeight('');
            setContactNumber('');
            setEmail('');
            setHouseNo('');
            setStreet('');
            setSubd('');
            setBarangay('');
            setCity('');
            setProvince('');
            setCountry('');
            setPostal('');
            setFSurname('');
            setFFname('');
            setFMName('');
            setFSuffix('');
            setFOccu('');
            setFCNumber('');
            setMSName('');
            setMFName('');
            setMMName('');
            setMOccu('');
            setMCNumber('');
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name,
            middle_name,
            last_name,
            suffix,
            date_of_birth,
            sex,
            civil_status,
            height,
            weight,
            contact_number,
            email,
            house_no,
            street,
            subd,
            barangay,
            city,
            province,
            country,
            postal,
            father_surname,
            father_fname,
            father_mname,
            father_suffix,
            father_occu,
            father_cn,
            mother_surname,
            mother_fname,
            mother_mname,
            mother_occu,
            mother_cn,
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>YOUR BASIC INFORMATION</p>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Suffix:</label>
                <input type='text' value={suffix} onChange={(e) => setSuffix(e.target.value)} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type='text' value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Height:</label>
                <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Contact Number:</label>
                <input type='text' value={contact_number} onChange={(e) => setContactNumber(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <p>ADDRESS</p>
                <label>House Number#:</label>
                <input type='text' value={house_no} onChange={(e) => setHouseNo(e.target.value)} />
            </div>
            <div>
                <label>Street:</label>
                <input type='text' value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>
            <div>
                <label>Subdivision:</label>
                <input type='text' value={subd} onChange={(e) => setSubd(e.target.value)} />
            </div>
            <div>
                <label>Barangay:</label>
                <input type='text' value={barangay} onChange={(e) => setBarangay(e.target.value)} />
            </div>
            <div>
                <label>City:</label>
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
                <label>Province:</label>
                <input type='text' value={province} onChange={(e) => setProvince(e.target.value)} />
            </div>
            <div>
                <label>Country:</label>
                <input type='text' value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <div>
                <label>Postal:</label>
                <input type='text' value={postal} onChange={(e) => setPostal(e.target.value)} />
            </div>
            <div>
                <p>FATHER'S NAME</p>
                <label>Surname:</label>
                <input type='text' value={father_surname} onChange={(e) => setFSurname(e.target.value)} />
            </div>
            <div>
                <label>First Name:</label>
                <input type='text' value={father_fname} onChange={(e) => setFFname(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={father_mname} onChange={(e) => setFMName(e.target.value)} />
            </div>
            <div>
                <label>Suffix:</label>
                <input type='text' value={father_suffix} onChange={(e) => setFSuffix(e.target.value)} />
            </div>
            <div>
                <label>Occupation:</label>
                <input type='text' value={father_occu} onChange={(e) => setFOccu(e.target.value)} />
            </div>
            <div>
                <label>Cellphone No.:</label>
                <input type='text' value={father_cn} onChange={(e) => setFCNumber(e.target.value)} />
            </div>
            <div>
                <p>MOTHER'S MAIDEN NAME</p>
                <label>Surname:</label>
                <input type='text' value={mother_surname} onChange={(e) => setMSName(e.target.value)} />
            </div>
            <div>
                <label>First Name:</label>
                <input type='text' value={mother_fname} onChange={(e) => setMFName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={mother_mname} onChange={(e) => setMMName(e.target.value)} />
            </div>
            <div>
                <label>Occupation:</label>
                <input type='text' value={mother_occu} onChange={(e) => setMOccu(e.target.value)} />
            </div>
            <div>
                <label>Cellphone No.:</label>
                <input type='text' value={mother_cn} onChange={(e) => setMCNumber(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ItemForm;
