import React from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from './Redux/Features/TaskSlice';

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    let dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        dispatch(addTask(data))
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <Modal title={'Add Task'} isOpen={isOpen} setIsOpen={setIsOpen}>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="input input-bordered w-full max-w-xs my-3" defaultValue="title" {...register("title")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="input input-bordered w-full max-w-xs my-3" {...register("Description", { required: true })} type='date' />
                    <select className="input input-bordered w-full max-w-xs my-3" {...register("AssignTo")}>
                        <option value="sifat">sifat</option>
                        <option value="sadakin">sadakin</option>
                        <option value="messi">messi</option>
                    </select>
                    <select className="input input-bordered w-full max-w-xs my-3" {...register("priority")}>
                        <option value="high">High</option>
                        <option value="low">low</option>
                        <option value="medium">Medium</option>
                    </select>
                    {/* errors will return when field validation fails  */}


                   <button   onClick={closeModal} className='bg-blue-500 p-2 text-white'>Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;