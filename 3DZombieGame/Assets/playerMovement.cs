using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerMovement : MonoBehaviour
{
    public CharacterController controller;
    public float speed = 12f;
    public float gravity = -9.81f;
    public float jumpHeight = 3f;
    public AudioSource audioS;

    public Transform GroundCheck;
    public float grounddistancer = 0.4f;
    public LayerMask groundmasker;


    Vector3 velocity;
    bool isGrounded;
    


    // Update is called once per frame
    void Update()
    {
        isGrounded = Physics.CheckSphere(GroundCheck.position, grounddistancer, groundmasker);
        
        if(isGrounded && velocity.y < 0)
        {
            velocity.y = -2f;
        }
            
            
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");
        if(z!= 0 || x!= 0 && isGrounded == true)
        {
            audioS.enabled = true;
            audioS.loop = true;
        }
        if(z==0 && x==0 || isGrounded == false)
        {
            audioS.enabled = false;
            audioS.loop = false;
        }

        Vector3 move = transform.right * x + transform.forward * z;
        controller.Move(move * speed * Time.deltaTime);

        if(Input.GetButtonDown("Jump") && isGrounded)
        {
            velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);
        }



        velocity.y += gravity * Time.deltaTime;
        controller.Move(velocity * Time.deltaTime);

    }
}
